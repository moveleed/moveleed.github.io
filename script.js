let balance       = 100;
const btn         = document.getElementById('btn')
const input       = document.getElementById('dep')
const statustext  = document.getElementById('statustext')
const balancetext = document.getElementById('balancetext')
balancetext.textContent = balance;

btn.addEventListener('click', function() {
    if (input.value == "") {
        statust = "введи хоть что то"
    } else if (isNaN(input.value) || Number(input.value) <= 0) {
        statust = "нет ну ты мудак блять или кто"
    } else if (Number(input.value) > balance) {
        statust = "а нахуя ты блять пытаешься депнуть больше чем у тебя на балике есть долбоеб"
    }
    else {
        let random = Math.random() >= 0.5 ? 1 : 0;
        if (random === 1) {
            balance = balance+Number(input.value)
            statust = "это победа"
        } else {
            balance = balance-Number(input.value)
            statust = "проигрышш((( анлакич"
        }
    }
    input.value = "";
    balancetext.textContent = balance;
    statustext.textContent  = statust;
})

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        btn.click();
    }
})