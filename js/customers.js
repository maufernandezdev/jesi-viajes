const imgsCount = 40;
const container = document.querySelector('.customersImgsCarousel');
for (let i = 2; i < imgsCount; i++)
{
    let div = document.createElement("div"); 
    div.setAttribute("class", "img__item"); 
    div.innerHTML = 
    ` 
        <img src="images/customers/customer${i}.jpeg" alt="img-${i}">
    `;
    container.appendChild(div);   
}

let div = document.createElement("div"); 
div.setAttribute("class", "img__item"); 
div.innerHTML = 
` 
    <img src="images/customers/customer${1}.jpeg" alt="img-${1}">
`;
container.appendChild(div);