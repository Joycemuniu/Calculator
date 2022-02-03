let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
      button.addEventListener('click', (e) => {
          console.log('clicked');
          console.log(e);
          console.log(e.target.innerText);
          console.log(e.target);
    switch(e.target.innerText){
                   case 'AC':
                       display.innerText =''
                       default:
                           display.innerText += e.target.innerText;
            }
      })
})