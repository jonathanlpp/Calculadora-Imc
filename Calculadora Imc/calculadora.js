const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit',function(event){
    event.preventDefault();

    const peso = document.querySelector("#peso").value
    const altura = document.querySelector("#altura").value

    const imc=( peso/ (altura * altura)).toFixed(2) // to fixed (Só Aparece duas casa dps da virglua)
    
    const value = document.querySelector("#value")
    value.textContent = imc.replace('.',',')

    let description = '';
    value.classList.add('attention')

    document.getElementById('infos').classList.remove('altura')

    if (imc < 18.5) {
        description = " Cuidado! Você está abaixo do peso! "
    } else if (imc >=18.5 && imc <= 25) {
        description =" Você está no peso ideal!"
        value.classList.remove('attention')
        value.classList.add('normal')
    }else if (imc > 25 && imc <= 30 ){
        description="Cuidado! Você está com sobrepeso!"
        value.classList.remove('attention')
        value.classList.add('cuidado')

    } else if (imc>30 && imc<=35){
        description="Cuidado! Você está com obesidade moderada!"
    } else if (imc>35 && imc<=40){
        description="Cuidado! Você está com obesidade Severa!"
    }else  {
        description="Cuidado! Você está com obesidade Morbida!"
    }
    document.querySelector("#description").textContent = description
});

