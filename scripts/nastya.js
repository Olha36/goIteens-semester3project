console.log('Nastya');
const btn_plus = document.querySelector("#plus");
const btn_minus = document.querySelector("#minus");
const btn_sub = document.querySelector("#sub");
const btn_mul = document.querySelector("#mul");
const btn_calc = document.querySelector("#calc");
const btn_clear = document.querySelector("#clear");

let oper = null;

btn_plus.addEventListener('click', () => {
    oper = '+'
})
btn_minus.addEventListener('click', () => {
    oper = '-'
})
btn_sub.addEventListener('click', () => {
    oper = '/'
})
btn_mul.addEventListener('click', () => {
    oper = '*'
})

btn_calc.addEventListener('click', () => {
    console.log(oper);
    const inp_1 = document.querySelector("#numm_1");
    const inp_2 = document.querySelector("#numm_2");
    const result = document.querySelector("#result");
    console.log(inp_1);
     console.log(inp_2.value);

    switch(oper){
        case '+':
            result.value = Number(inp_1.value)+ Number(inp_2.value);
            break;
        case '-':
            result.value = Number(inp_1.value)- Number(inp_2.value);
            break;
        case '/':
            result.value = Number(inp_1.value)/ Number(inp_2.value);
            break;
        case '*':
            result.value = Number(inp_1.value)* Number(inp_2.value);
            break;
        default:
            break;

        }
    })

    btn_clear.addEventListener('click', () => {
    console.log('clear');
    const inp_1 = document.querySelector("#numm_1");
    const inp_2 = document.querySelector("#numm_2");
    const result = document.querySelector("#result");
    inp_1.value = null
    inp_2.value = null
    result.value = null
    oper = null;
    
    })