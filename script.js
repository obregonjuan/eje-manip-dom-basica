const h1 = document.querySelector ("h1")
const form = document.querySelector ("#form")
const input1 = document.querySelector ("#calculo1")
const input2 = document.querySelector ("#calculo2")
const btn = document.querySelector("#btncalc")
const presult = document.querySelector("#result")
h1.innerHTML = "Cambio de Titulo"
form.addEventListener("submit", btnonclick)
function btnonclick (event){
  event.preventDefault();
  let suma = parseInt(input1.value) + parseInt(input2.value);
  presult.innerText = "El resultado es " + suma
}
