const btnSumar=document.querySelector("#btnSuma");
const btnBorrarSuma=document.querySelector("#btnLimpiarSuma");

btnSumar.addEventListener('click',suma);
btnBorrarSuma.addEventListener('click',limpiarSuma);


function suma(){
    const R_Suma= document.querySelector("#R_Suma");
    var n1=document.getElementById("s1").value;
    var n2=document.getElementById("s2").value;
    R_Suma.innerHTML="La suma es: "+(parseInt(n1) +parseInt(n2));
}

function limpiarSuma(){
    const R_Suma= document.querySelector("#R_Suma");
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    R_Suma.innerHTML="";
}