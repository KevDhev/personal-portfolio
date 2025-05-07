const emailIcon = document.querySelector('#email');
const emailIcon2 = document.querySelector('#email2');
const btnYT = document.querySelectorAll('.yt');

emailIcon.addEventListener('click', () => {
    const email_address = 'kmarrufo62@gmail.com';

    navigator.clipboard.writeText(email_address)
        .then(() => {
            alert(`Has copiado mi correo electrónico ( ${email_address} ) en el portapapeles.`);
        })
        .catch(error => {
            console.error('Error al copiar: ', error);
            alert(`No se pudo copiar el email. Puedes copiarlo manualmente: ${email_address}`);
        });
})

emailIcon2.addEventListener('click', () => {
    const email_address = 'kmarrufo62@gmail.com';

    navigator.clipboard.writeText(email_address)
        .then(() => {
            alert(`Has copiado mi correo electrónico ( ${email_address} ) en el portapapeles.`);
        })
        .catch(error => {
            console.error('Error al copiar: ', error);
            alert(`No se pudo copiar el email. Puedes copiarlo manualmente: ${email_address}`);
        });
})

btnYT.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        alert("Por el momento, el video para explicar el proyecto se encuentra en grabación/edición.");
    })
})