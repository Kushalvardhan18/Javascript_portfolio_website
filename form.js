const submission = document.querySelector("#submit_Form")
const firstNameInput = document.querySelector('#first_Name')
const lastNameInput = document.querySelector('#last_Name')
const emailInput = document.querySelector('#email_ID')
const messageInput = document.querySelector('#message_To_Convey')


const isValid = ()=> {
    const Invalidation =
    firstNameInput.value.trim() === "" ||
    lastNameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === "" 
    submission.disabled = Invalidation
}
[firstNameInput,lastNameInput,emailInput,messageInput].forEach( input=> {
    input.addEventListener('input',isValid)
});
isValid()

submission.addEventListener('click', (e) => {
    e.preventDefault()
   
    const firstName = document.querySelector('#first_Name').value
    const lastName = document.querySelector('#last_Name').value
    const email = document.querySelector('#email_ID').value
    const message = document.querySelector('#message_To_Convey').value
    const subject = "Hiring !!!"
    const mail_Link = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n" + firstName + "" + lastName)}`;
    window.location.href = mail_Link
})