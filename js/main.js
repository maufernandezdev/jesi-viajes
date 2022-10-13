/* Close sidebar funcionality */
let links = document.getElementsByClassName('link')
for (const link of links)
{
    link.addEventListener('click', ()=>{

        let check = document.getElementById('check');
        check.checked = false;
    });
    
}

if(screen.width > 1240)
{
    let img = document.getElementById('foundress');
    let imgUs = document.getElementById('usPhoto');
    if(img)
    {
        img.setAttribute("src", "images/nancy-desktop2.png")
    }
    if(imgUs)
    {
        imgUs.setAttribute("src", "images/nancy-desktop-us2.png")
    }
}

// emailjs
const notification = (text) =>
{
    Toastify({
        text: text,
        className: "info",
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
const templateID = 'template_24lczss';

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