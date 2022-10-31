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

const dinamicNav = () =>
{
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    const header = document.querySelector('header');
    if(scroll > 0 && scroll < 10)
    {   
        header.classList.add('dinamicHeader');
        const img1 = document.querySelector('.img1');
        img1.classList.add('titleColor');       
    }
    if(scroll === 0)
    {   
        console.log('llegaste al tope');
        header.classList.remove('dinamicHeader');
        const img1 = document.querySelector('.img1');
        img1.classList.remove('titleColor');
    }
}

window.document.addEventListener("touchmove", dinamicNav);
window.document.addEventListener("scroll", dinamicNav);