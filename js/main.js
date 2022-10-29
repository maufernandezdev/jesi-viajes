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
if(form)
{
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
}

window.onscroll = () =>{
    // Obtenemos la posicion del scroll en pantall
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    const header = document.querySelector('header');
    let links = document.querySelectorAll('.link');
    if(scroll > 0 && scroll < 2)
    {   
        header.classList.add('dinamicHeader');
        if(screen.width > 1240)
        {
            document.styleSheets[0].insertRule(".links a::after {background-color: #000 !important;}", 0);
            links.forEach(link => {
                link.classList.add('titleColor');
            });
        }
        else
        {
            const img1 = document.querySelector('.img1');
            img1.classList.add('titleColor');
        }   
    }
    if(scroll === 0)
    {   
        console.log('llegaste al tope');
        header.classList.remove('dinamicHeader');
        if(screen.width > 1240)
        {
            const rules = document.styleSheets[0].cssRules;
            for (let index = 0; index < rules.length; index++)
            {
                if(rules[index].selectorText == ".links a::after")
                {
                    document.styleSheets[0].deleteRule(index);
                }   
            }
            // console.log("rules: ", rules);
            links.forEach(link => {
                link.classList.remove('titleColor');
            });
            document.styleSheets[0].deleteRule(0);
        }
        else
        {
            const img1 = document.querySelector('.img1');
            img1.classList.remove('titleColor');
        } 
    }
}
// Detectamos cuando el usuario desplace la pantalla