let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '=') {
            string = string.replaceAll('×', '*');
            string = string.replaceAll('÷', '/');
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '+/-') {
            if (string[0] != '-') {
                string = '-' + string;
                document.querySelector('input').value = string;
            }
            else {
                string = string.slice(1);
                document.querySelector('input').value = string;
            }
        }
        else {
            // console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})