// download resume functionality
const resumeDownload = document.querySelector('.Download')
resumeDownload.addEventListener("click", () => {
    const path = "/files/resume.pdf"
    const link = document.createElement('a')
    fetch(path)
        .then(response => {
            if (response.ok) {
                link.href = path
                link.download = 'resume.pdf'
                link.click()
            }
            else {
                alert("Sorry, the resume file could not be found.")
            }
        }).catch(error => {
            console.log("Error catching the file");
            alert("An error occurred while trying to download the file.");
        })
})

// twitter button functionality
const twitter = document.querySelector("#twitter")
const link1 = document.createElement('a')
twitter.addEventListener('click', () => {
    link1.href = "https://x.com/Kuvar2941"
    link1.target = "_blank"
    link1.click()
})

// linkedIn button functionality
const linkedIn = document.querySelector("#linkedIn")
const link2 = document.createElement('a')
linkedIn.addEventListener('click', () => {
    link2.href = "https://www.linkedin.com/in/kushalvardhan1804/"
    link2.target = "_blank"
    link2.click()
})

// mail button functionality
const mail = document.querySelector(".mail")
// const link3 =
mail.addEventListener('click', () => {
    const email = "kushalvardhan1804@hotmail.com";
    const subject = "Hiring!!!";
    const body = "Dear Kushal Vardhan,\n\nI hope this message finds you well. I am reaching out to discuss an exciting opportunity to collaborate with you. Your skills and expertise make you a perfect candidate for a role we are looking to fill. We value your unique talents and believe you would make a significant impact on our team.\n\nIf you're interested, I'd be delighted to provide more details and answer any questions you may have.\n\nLooking forward to hearing from you.\n\nBest regards\n";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink
})

// leetcode button functionality
const leetcode = document.querySelector("#leetcode")
const link3 = document.createElement('a')
leetcode.addEventListener('click', () => {
    link3.href = "https://leetcode.com/u/Kuvar2941/"
    link3.target = "_blank"
    link3.click()
})

// github button functionality
const github = document.querySelector("#github")
const link4 = document.createElement('a')
github.addEventListener('click', () => {
    link4.href = "https://github.com/Kushalvardhan18"
    link4.target = "_blank"
    link4.click()
})

// Route to home when click on logo
const logo_Button = document.querySelector(".left img")
logo_Button.addEventListener('click',()=>{
    window.location.href = "/index.html"
})

const currentPath = window.location.pathname.split('/').pop(); // Extracts the last part of the path
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
        link.classList.add('active');
    }
});
