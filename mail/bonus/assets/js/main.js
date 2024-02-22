// MAIL EXERCISE

document.querySelector('form').addEventListener('submit', function (e) {

    e.preventDefault();

    const inputElement = document.querySelector('input');

    const listEmail = ['terry@gmail.com', 'jake@gmail.com', 'ginalinetti@gmail.com', 'charlesboyle@gmail.com', 'hitchcock@hotmail.com'];
    
    const containerElement= document.querySelector('.container')
    
    let outputElement = document.querySelector('.alert');
  
    console.log(inputElement.value);
    let check = false;
    for (let i = 0; i < listEmail.length; i++) {
        const element = listEmail[i];
        if (inputElement.value === element) {
        check = true;
        console.log(check);
    }
    }
    if (check === true) {
        outputMessage = ('SEI PRESENTE NELLA MAIL LIST!');
    } else{
        
        outputMessage = ('MI DISPIACE! MA NON SEI PRESENTE NELLA MAIL LIST!');
    }
    outputElement.innerHTML = outputMessage;
})
