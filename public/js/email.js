let subject_input
let body_input
let submit_btn
let contacts_container

function sendEmail() {
    const subject = subject_input.value
    const body = body_input.value

    fetch('/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({subject: subject, body: body})
    })
    .then(res => res.json())
    .then((res) => {
        console.log(res.success)
        if(res.success)
            $('#email-success-alert').show()
        else 
            $('#email-error-alert').show()
    })
}

function init() {
    $('#email-success-alert').hide()
    $('#email-error-alert').hide()
    subject_input      = document.getElementById('subject-input')
    body_input         = document.getElementById('body-input')
    submit_btn         = document.getElementById('send-btn')
    contacts_container = document.getElementById('contacts-title')
    submit_btn.addEventListener('click', sendEmail)
}


window.addEventListener('load', init)