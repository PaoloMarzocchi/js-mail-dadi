
// DICE GAME EXERCISE

const inputDice = document.querySelector('.btn');

inputDice.addEventListener('click', function(){

    let diceResults = [];
    let textResult = document.querySelector('h2');
    let userResult = document.querySelector('.user');
    let cpuResult = document.querySelector('.cpu');

    for(i=0; i<2 ; i++){
        function userGenerate(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
          diceResults.push(userGenerate(1,7));       
    }
    //console.log(diceResults);
    userResult.innerHTML = diceResults[0];
    cpuResult.innerHTML = diceResults[1];

    if (diceResults[0] > diceResults[1]) {
        //console.log('HAI VINTO');
        textResult.innerHTML = 'HAI VINTO!'
    } else if (diceResults[0] < diceResults[1]) {
        //console.log('HAI PERSO');
        textResult.innerHTML = 'HAI PERSO!'
    } else{
        //console.log('PAREGGIO');
        textResult.innerHTML = 'PAREGGIO!'
    }
})


//document.getElementById('demo').innerHTML = userGenerate(0,10)