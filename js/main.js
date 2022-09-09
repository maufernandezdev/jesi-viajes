/* Close sidebar funcionality */
let links = document.getElementsByClassName('link')
for (const link of links)
{
    link.addEventListener('click', ()=>{

        let check = document.getElementById('check');
        check.checked = false;
    });
    
}

if(screen.width > 1366)
{
    let img = document.getElementById('foundress');
    let imgUs = document.getElementById('usPhoto');
    if(img)
    {
        img.setAttribute("src", "images/nancy-desktop.png")
    }
    if(imgUs)
    {
        imgUs.setAttribute("src", "images/nancy-desktop-us.png")
    }
}