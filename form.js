const submission = document.querySelector("#submit_Form")
const firstNameInput = document.querySelector('#first_Name')
const lastNameInput = document.querySelector('#last_Name')
const emailInput = document.querySelector('#email_ID')
const messageInput = document.querySelector('#message_To_Convey')


submission.disabled = firstNameInput.value.trim() === "";
firstNameInput.addEventListener('input', () => {
    if (firstNameInput.value.trim() === "") {
        submission.disabled = true
    }
    else {
        submission.disabled = false

    }
})
lastNameInput.addEventListener('input', () => {
    if (lastNameInput.value.trim() === "") {
        submission.disabled = true
    }
    else {
        submission.disabled = false

    }
})
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === "") {
        submission.disabled = true
    }
    else {
        submission.disabled = false

    }
})
messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() === "") {
        submission.disabled = true
    }
    else {
        submission.disabled = false

    }
})

submission.addEventListener('click', (e) => {
    // e.preventDefault()
    const firstName = document.querySelector('#first_Name').value
    const lastName = document.querySelector('#last_Name').value
    const email = document.querySelector('#email_ID').value
    const message = document.querySelector('#message_To_Convey').value
    const subject = "Hiring !!!"
    const mail_Link = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n" + firstName + "" + lastName)}`;
    window.location.href = mail_Link
})