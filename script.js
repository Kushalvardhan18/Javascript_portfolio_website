
const resumeDownload = document.querySelector('.Download')
resumeDownload.addEventListener("click",()=>{
    const path = "/files/resume.pdf"
    const link = document.createElement('a')
    fetch(path)
    .then(response =>{
        if(response.ok){
            link.href=path
            link.download='resume.pdf'
            link.click()
        }
        else{
            alert("Sorry, the resume file could not be found.")
        }
    }).catch(error=>{
        console.log("Error catching the file");
        alert("An error occurred while trying to download the file.");
    })
})