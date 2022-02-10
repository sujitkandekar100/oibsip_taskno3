 let screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
 let screenValue = '';

 document.onkeyup = e => {
     if (e.key == "0" || e.key == "Num0") {
         type_(0);
     } else if (e.key == "1" || e.key == "Num1") {
         type_(1);
     } else if (e.key == "2" || e.key == "Num2") {
         type_(2);
     } else if (e.key == "3" || e.key == "Num3") {
         type_(3);
     } else if (e.key == "4" || e.key == "Num4") {
         type_(4);
     } else if (e.key == "5" || e.key == "Num5") {
         type_(5);
     } else if (e.key == "6" || e.key == "Num6") {
         type_(6);
     } else if (e.key == "7" || e.key == "Num7") {
         type_(7);
     } else if (e.key == "8" || e.key == "Num8") {
         type_(8);
     } else if (e.key == "9" || e.key == "Num9") {
         type_(9);
     } else if (e.key == "+" || e.key == "Num+") {
         type_("+");
     } else if (e.key == "-" || e.key == "Num-") {
         type_("-");
     } else if (e.key == "*" || e.key == "Num*") {
         type_("X");
     } else if (e.key == "/" || e.key == "Num/") {
         type_("/");
     } else if (e.key == "%") {
         type_("%");
     } else if (e.key == "." || e.key == "Num.") {
         type_(".");
     } else if (e.key == "Enter" || e.key == "NumEnter") {
         set_ans(screen.value);
     } else if (e.key == "Backspace") {
         erase_screen();
     } else if (e.key == "Delete" || e.key == "Escape") {
         screen_reset();
     }
 }


 for (item of buttons) {
     item.addEventListener('click', (e) => {
         buttonText = e.target.innerText;
         console.log('Button text is ', buttonText);
         if (buttonText == 'X') {
             buttonText = '*';
             screenValue += buttonText;
             screen.value = screenValue;
         } else if (buttonText == 'C') {
             screenValue = "";
             screen.value = screenValue;
         } else if (buttonText == '=') {
             screen.value = eval(screen.value);
         } else {
             screenValue += buttonText;
             screen.value = screenValue;
         }

     })
 }