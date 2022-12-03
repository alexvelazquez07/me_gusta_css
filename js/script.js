function like (id){
    let elemento = document.querySelector(id);
    console.log(elemento.innerText);
    console.log(typeof(elemento.innerText));
    elemento.innerText++;
}