const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Integração com o EmailJS para receber mensagem no email

emailjs.init("SoTs374UaJeLGYzMh");
console.log("EmailJS inicializado com sucesso");

function enviarEmail(event) {
    event.preventDefault(); 

    const serviceID = "service_u52g6jj"; 
    const templateID = "template_66ik55t"; 

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("mensagem").value,
    };

    console.log("Dados do formulário:", data);

    emailjs.send(serviceID, templateID, data)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            document.querySelector("#contact-form").reset(); 
        })
        .catch((error) => {
            console.error("Erro ao enviar mensagem:", error);
            alert("Erro ao enviar a mensagem. Tente novamente.");
        });
}

const form = document.querySelector("#contact-form");
form.removeEventListener("submit", enviarEmail);
form.addEventListener("submit", enviarEmail);
