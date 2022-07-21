const experience_elements = document.getElementsByClassName('experience-element')
const about_left = document.getElementsByClassName('about-double')[0]
const about_right = document.getElementById('about-pic')
const education_elements = document.getElementsByClassName('education-element')

document.addEventListener('scroll', checkLocation);

function checkLocation(event) {
    console.log(window.scrollY)
    var location = window.scrollY;

    console.log(experience_elements)

    if(location >= 265) {
        about_left.style.animationPlayState = "running"
        about_right.style.animationPlayState = "running"
    } 
    
    if(location >= 1326) {
        for(let i = 0; i < experience_elements.length; i++) {
            setTimeout(function() {
                experience_elements[i].style.animationPlayState = "running"
            }, i * 300)
        }
    }

    if(location >= 2244) {
        for(let i = 0; i < education_elements.length; i++) {
            setTimeout(function() {
                education_elements[i].style.animationPlayState = "running"
            }, i * 400)
        }
    }

}