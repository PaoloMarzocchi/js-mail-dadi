const inputEmail = prompt('Inerire la mail da controllare');

const ListEmail = ['terry@gmail.com', 'jake@gmail.com', 'ginalinetti@gmail.com', 'charlesboyle@gmail.com', 'hitchcock@hotmail.com'];
const containerElement= document.querySelector('.container')
let outputMessage = document.createElement('h1');
let check = false;
for (let i = 0; i < ListEmail.length; i++) {
    const element = ListEmail[i];
    if (inputEmail === element) {
    check = true;
}
}
if (check === true) {
    outputMessage.append('SEI PRESENTE NELLA MAIL LIST!');
} else{
    outputMessage.append('MI DISPIACE! MA NON SEI PRESENTE NELLA MAIL LIST');
}
containerElement.append(outputMessage);