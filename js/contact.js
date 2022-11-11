// emailjs
const notification = (text) =>
{
    Toastify({
        text: text,
        className: "info",
        gravity: "bottom", 
        position: "center",
        style: {
          background: "#DF7539",
          color: "#fff"
        }
    }).showToast();
}
const btn = document.querySelector('#btn-send');
const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_t4k09wh';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Enviar';
    notification('¡Consulta enviada!');
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#comment').value = '';
    }, (err) => {
    btn.value = 'Enviar';
    notification('¡Ups, error al enviar!');
    console.log(JSON.stringify(err));
    });
});