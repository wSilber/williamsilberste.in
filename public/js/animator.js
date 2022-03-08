import * as THREE from "../lib/three.module.js"
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
const max_change_speed = 30
const change_delay     = 10000
const amplitude        = 100

let   vertices
let   scales
let   window_half_x
let   window_half_y
let   points
let   current_shape
let   box_particles
let   wave_particles
let   change_speed
let   mouse_x
let   mouse_y

let animation_bg

function init() {
    window_half_x = window.innerWidth / 2
    window_half_y = window.innerHeight / 2
    mouse_x       = 0
    mouse_y       = 0

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

    console.log(rows + " : " + cols)

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
    camera.position.y = 100;

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
    animate()




    current_shape = 0

    setInterval(() => {
        if(current_shape === 0) {
            current_shape = 1
        } else {
            current_shape = 0
        }
    }, change_delay)

}

function initBox(scene) {
    let box_geometry = new THREE.BoxGeometry( 1000, 1000, 1000, 80, 8, 8 );

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

    console.log(box_particles)
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
        visible: true
    });

    wave_particles = new THREE.Points( wave_geometry, wave_material )

    scene.add(wave_particles)
}

function animate(time) {
    requestAnimationFrame(animate)
        renderAnimation(time)
}

function renderAnimation(time) {

    if(wave_particles == undefined)
        return


    const positions = points.geometry.attributes.position.array
    const scales    = points.geometry.attributes.size.array

    const wave_position = wave_particles.geometry.attributes.position.array
    
    let i  = 0,
        j  = 0

    let endPosX
    let endPosY
    let endPosZ

    current_shape = 0
    
    for(let ix = 0; ix < rows; ix++) {
        
        for(let jx = 0; jx < cols; jx++) {
            
            wave_position[i + 1 ] = Math.sin((time /1000 + ix) * .5) * 100 + Math.sin((time /1000 + jx) * .5) * 100

            if(current_shape == 0) {
                endPosX = wave_particles.geometry.attributes.position.array[i]
                endPosY = wave_particles.geometry.attributes.position.array[i+1]
                endPosZ = wave_particles.geometry.attributes.position.array[i+2]
            } else {
                console.log(current_shape)
                endPosX = box_particles.geometry.attributes.position.array[i]
                endPosY = box_particles.geometry.attributes.position.array[i+1]
                endPosZ = box_particles.geometry.attributes.position.array[i+2]
            }

            let deltaX = endPosX - positions[i]
            let deltaY = endPosY - positions[i+1]
            let deltaZ = endPosZ - positions[i+2]

            let distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY) + (deltaZ * deltaZ))

            if(distance > change_speed) {
                positions[i]   += (change_Speed / distance) * deltaX
                positions[i+1] += (change_speed / distance) * deltaY
                positions[i+2] += (change_speed / distance) * deltaZ
            } else {
                positions[i] = endPosX
                positions[i+1] = endPosY
                positions[i+2] = endPosZ
            }

            scales[j] = 100
            i += 3;

        }
    }

    points.geometry.attributes.position.needsUpdate = true
    points.geometry.attributes.size.needsUpdate = true

    points.rotation.y += 0.00005

    camera.position.x += ( mouse_x - camera.position.x) * .00009
    camera.position.y += (-mouse_y - camera.position.y) * .00009

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