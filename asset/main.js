var computerGuess;
var userGuessLog=[];
var attemps=0;


function newGame(){
    window.location.reload();
}

function init(){
    computerGuess =Math.floor (Math.random() * 100 + 1);

 }

 

function compareGuesse(){ 
    var userGuess= " " + document.getElementById('inputBox').value;
   
     
userGuessLog.push(userGuess) ; 
  
   document.getElementById('guessLog').innerHTML=userGuessLog ;
   attemps++;
   document.getElementById('attemps').innerHTML=attemps;

   if(userGuess >100){
       alert("Vouz devez entre un numero entre 1 et 100");
return;
   }
    else if(userGuess > computerGuess){
        document.getElementById('textOutput').innerHTML='Votre numero est trop grand';
        document.getElementById('inputBox').value="";
        }else if(userGuess<computerGuess )
        {
            document.getElementById('textOutput').innerHTML='Votre numero est trop petit';  
            document.getElementById('inputBox').value="";
        }else{
            alert('Votre numéro est correct', newGame()); 
           
        }

       
       
           
}
