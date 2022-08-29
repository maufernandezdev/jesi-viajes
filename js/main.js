/* Close sidebar funcionality */
let links = document.getElementsByClassName('link')
for (const link of links)
{
    link.addEventListener('click', ()=>{

        let check = document.getElementById('check');
        check.checked = false;
    });
    
}