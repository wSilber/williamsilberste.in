import * as BufferGeometryUtils from "../lib/BufferGeometryUtils.js"

let   scene
let   camera
let   renderer
let   material
let   geometry

const distance         = 40
const rows             = 216
const cols             = 216
const particle_amount  = rows * cols
const particleSize     = 5
const max_change_speed = 10
const change_delay     = 10000
const amplitude        = 100
let   current_shape    = 0
let   change_speed     = 0

let   vertices
let   scales
let   window_half_x
let   window_half_y
let   points
let   box_particles
let   wave_particles
let   wave_particles2
let   mouse_x
let   mouse_y


let animation_bg

function init() {
    window_half_x = window.innerWidth / 2
    window_half_y = window.innerHeight / 2
    mouse_x       = 0
    mouse_y       = 0
    current_shape = 0

    scene    = new THREE.Scene()
    geometry = new THREE.BufferGeometry()
    material = new THREE.PointsMaterial({ 
        size            : particleSize, 
        sizeAttenuation : true,  
        alphaTest       : 0.5, 
        transparent     : true, 
        color           : 0x5b91b5 } 
    )

    vertices = []
    scales   = []

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            vertices.push(i * distance - ( ( rows * distance ) / 2 )); // x
            vertices.push(0); // y
            vertices.push(j * distance - ( ( cols * distance ) / 2 )); // z
            scales.push(1)
        }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('size',     new THREE.Float32BufferAttribute(scales  , 1))

    camera = new THREE.PerspectiveCamera(
        100, 
        window.innerWidth / window.innerHeight, 
        100, 
        10000
    )

    camera.position.z = 150;
    camera.position.y = 1000;

    points = new THREE.Points(geometry, material)

    scene.add(points)

    

    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.domElement.style.position = 'absolute'

    animation_bg = document.getElementById('animation-bg')
    animation_bg.appendChild(renderer.domElement);

    renderer.render(scene, camera)

    initBox(scene)
    initWave(scene)
    initWave2(scene)
    animate()

    setInterval(() => {
        if(current_shape == 0) {
            current_shape = 1
        } else {
            current_shape = 0
        }
    }, change_delay)

}

function initBox(scene) {
    let box_geometry = new THREE.BoxGeometry( 1000, 1000, 1000, 80, 80, 80 );

    box_geometry.deleteAttribute('normal')
    box_geometry.deleteAttribute('uv')

    box_geometry = BufferGeometryUtils.mergeVertices(box_geometry)

    const position_attribute = box_geometry.getAttribute('position')

    const colors = []
    const sizes  = []

    const color = new THREE.Color()

    const length = position_attribute.count
    for(let i = 0; i < length; i++) {
        color.setHSL(0.01 + 0.1 * (i/length), 1.0, 0.5)
        color.toArray(colors, i*3)
        sizes[i] = particleSize * 5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position'   , position_attribute)
    geometry.setAttribute('customColor', new THREE.Float32BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({ 
        size: particleSize, 
        sizeAttenuation: true,  
        alphaTest: 1, 
        visible: false, 
        transparent: true 
    })

    box_particles = new THREE.Points(geometry, material)
    scene.add(box_particles)
}

function initWave(scene) {
    const vertices = []
    const scales    = []

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            vertices.push(i * distance - ( ( rows * distance ) / 2 )); // x
			vertices.push(0); // y
			vertices.push(j * distance - ( ( cols * distance ) / 2 )); // z
            
            scales.push(1)
        }
    }

    const wave_geometry = new THREE.BufferGeometry()

    wave_geometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices, 3 ))
    wave_geometry.setAttribute('size'    , new THREE.Float32BufferAttribute(scales, 1))

    const wave_material = new THREE.PointsMaterial({ 
        size: particleSize,
        sizeAttenuation: true,  
        alphaTest: 0.5, 
        transparent: true, 
        color: 0x5b91b5, 
        visible: false
    });

    wave_particles = new THREE.Points( wave_geometry, wave_material )


    scene.add(wave_particles)
}

function initWave2(scene) {
    const vertices = []
    const scales    = []

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            vertices.push(i * distance - ( ( rows * distance ) / 2 )); // x
			vertices.push(0); // y
			vertices.push(j * distance - ( ( cols * distance ) / 2 )); // z
            
            scales.push(1)
        }
    }

    const wave_geometry = new THREE.BufferGeometry()

    wave_geometry.setAttribute('position', new THREE.Float32BufferAttribute( vertices, 3 ))
    wave_geometry.setAttribute('size'    , new THREE.Float32BufferAttribute(scales, 1))

    const wave_material = new THREE.PointsMaterial({ 
        size: particleSize,
        sizeAttenuation: true,  
        alphaTest: 0.5, 
        transparent: true, 
        color: 0x5b91b5, 
        visible: false
    });

    wave_particles2 = new THREE.Points( wave_geometry, wave_material )


    scene.add(wave_particles2)
}

function animate(time) {
    requestAnimationFrame(animate)
    if(time != undefined)
    renderAnimation(time)
}

function renderAnimation(time) {

    const positions = points.geometry.attributes.position.array
    const scales    = points.geometry.attributes.size.array

    const wave_position = wave_particles.geometry.attributes.position.array
    const wave_position2 = wave_particles2.geometry.attributes.position.array
    
    let i  = 0,
        j  = 0

    let endPosX
    let endPosY
    let endPosZ
    
    for(let ix = 0; ix < rows; ix++) {
        
        for(let jx = 0; jx < cols; jx++) {
            
            wave_position[i + 1 ] = Math.sin((time /1000 + ix) * .5) * 100 + Math.sin((time /1000 + jx) * .5) * 100
            wave_position2[i + 1 ] = Math.tan((time / 50000 +ix) * .5) * 100 + Math.tan((time / 50000 +jx) * .5) * 100
            
            if(current_shape == 0) {
                endPosX = wave_particles.geometry.attributes.position.array[i]
                endPosY = wave_particles.geometry.attributes.position.array[i+1]
                endPosZ = wave_particles.geometry.attributes.position.array[i+2]
            } else {
                endPosX = wave_particles2.geometry.attributes.position.array[i]
                endPosY = wave_particles2.geometry.attributes.position.array[i+1]
                endPosZ = wave_particles2.geometry.attributes.position.array[i+2]
            }

            let deltaX = endPosX - positions[i]
            let deltaY = endPosY - positions[i+1]
            let deltaZ = endPosZ - positions[i+2]

            let distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY) + (deltaZ * deltaZ))

            if(distance > change_speed) {
                positions[i]   += (change_speed / distance) * deltaX
                positions[i+1] += (change_speed / distance) * deltaY
                positions[i+2] += (change_speed / distance) * deltaZ
            } else {
                positions[i]   = endPosX
                positions[i+1] = endPosY
                positions[i+2] = endPosZ
            }

            scales[j] = 100
            i        += 3;

        }
    }

    points.geometry.attributes.position.needsUpdate = true
    points.geometry.attributes.size.needsUpdate = true

   // points.rotation.y += 0.00005

    camera.position.x += ( mouse_x - camera.position.x) * .00009
    //camera.position.y += (-mouse_y - camera.position.y) * .00009

    camera.lookAt(scene.position)

    renderer.render(scene, camera)

    if(change_speed < max_change_speed)
        change_speed++

    
}

function onWindowResize() {
    window_half_x = window.innerWidth / 2
    window_half_y = window.innerHeight / 2

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function onPointerMove(event) {
    if(event.isPrimary === false)
        return

    mouse_x = event.clientX - window_half_x
    mouse_y = event.clientY - window_half_y
}

window.addEventListener('load', init)
window.addEventListener('resize', onWindowResize)
window.addEventListener('pointermove', onPointerMove)