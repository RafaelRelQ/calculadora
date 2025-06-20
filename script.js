const themeswap = document.querySelector("#theme");
const body = document.body;
const result = document.querySelector(".result");
const btnNumbers = document.querySelectorAll(".number");
const btnEqual = document.querySelector("button.equal");
const btnOperators = document.querySelectorAll("button.operators");
const textresult = document.querySelector(".textresult")

themeswap.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")  ){
        themeswap.innerHTML = "🌙";
    }else{
        themeswap.innerHTML = "☀️";
    }

    result.classList.toggle("resultdark");
    themeswap.classList.toggle("dark");
    btnEqual.classList.toggle("equaldark");
    btnNumbers.forEach(btn => btn.classList.toggle("numberdark"));
    btnOperators.forEach(btn => btn.classList.toggle("operatorsdark"));
});


const um = document.querySelector("#b1");
const dois = document.querySelector("#b2");
const tres = document.querySelector("#b3");
const quatro = document.querySelector("#b4");
const cinco = document.querySelector("#b5");
const seis = document.querySelector("#b6");
const sete = document.querySelector("#b7");
const oito = document.querySelector("#b8");
const nove = document.querySelector("#b9");
const zero = document.querySelector("#b0");
const sum = document.querySelector("#plus");
const sub = document.querySelector("#minus");
const times = document.querySelector("#times");
const div = document.querySelector("#divide");
const clear = document.querySelector("#clear")

um.addEventListener("click", () =>{
    textresult.textContent += "1";
})

dois.addEventListener("click", () => {
    textresult.textContent += "2";
})

tres.addEventListener("click", () => {
    textresult.textContent += "3";
})

quatro.addEventListener("click", () => {
    textresult.textContent += "4";
})

cinco.addEventListener("click", () => {
    textresult.textContent += "5";
})

seis.addEventListener("click", () => {
    textresult.textContent += "6";
})

sete.addEventListener("click", () => {
    textresult.textContent += "7";
})

oito.addEventListener("click", () => {
    textresult.textContent += "8";
})

nove.addEventListener("click", () => {
    textresult.textContent += "9";
})

zero.addEventListener("click", () => {
    textresult.textContent += "0";
})

sum.addEventListener("click", () => {
    textresult.textContent += "+";
})

sub.addEventListener("click", () => {
    textresult.textContent += "-";
})

times.addEventListener("click", () => {
    textresult.textContent += "*";
})

div.addEventListener("click", () => {
    textresult.textContent += "/";
})

btnEqual.addEventListener("click", () => {
    try{
        textresult.textContent = eval(textresult.textContent);
    }catch(e) {
        textresult.textContent = "Error";
    }
})

clear.addEventListener("click", () => {
    textresult.textContent = "";
})