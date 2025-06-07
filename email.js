const sendEmail = () => {
   
    const templateParams = {
    name:document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#message').value
    }


emailjs.send("service_ms1yqmm", "template_12ge2re", templateParams)
    .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
        
    })
    .catch((error) => {
        console.error("Failed to send email.", error);
        alert("Failed to send email. Please try again later.");
    }   )  
    
}