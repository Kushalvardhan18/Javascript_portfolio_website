
const firstNameInput = document.querySelector('#first_Name')
const lastNameInput = document.querySelector('#last_Name')
const emailInput = document.querySelector('#email_ID')
const messageInput = document.querySelector('#message_To_Convey')
const submission = document.querySelector("#submit_Form");


submission.addEventListener('click', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        firstName: firstNameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
        subject: "Hiring !!!"
    };

    // Validate form data
    if (isValid(formData)) {
        const mailLink = `mailto:${formData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message + "\n" + formData.firstName + " " + formData.lastName)}`;
        window.location.href = mailLink;
    }
});

const isValid = (formData) => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        alert("Please fill out all fields before submitting!");
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    return true;
};


// document.getElementById("contactForm").addEventListener('submit', (e) => {
//     e.preventDefault();

//     emailjs.init("");
//     const formData = {
//         firstName: document.querySelector('#first_Name').value.trim(),
//         lastName: document.querySelector('#last_Name').value.trim(),
//         email: document.querySelector('#email_ID').value.trim(),
//         message: document.querySelector('#message_To_Convey').value.trim(),
//         subject: "Hiring !!!",
//     };

//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
//         alert("Please fill out all fields before submitting!");
//         return;
//     }

//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         alert("Please enter a valid email address!");
//         return;
//     }

//     emailjs.send("", "", formData)
//         .then(() => {
//             alert("Message sent successfully!");
//             document.getElementById("contactForm").reset(); //
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//             alert("Failed to send message. Please try again later.");
//         });
// });
