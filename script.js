let passwordInput = document.querySelector("#password");
let userNameInput = document.querySelector("#username");


let submitButton = document.querySelector("#submit-button");
let correct = document.querySelector("#success");
let incorrect = document.querySelector("#error");
let body = document.querySelector("body");



submitButton.onclick = function(event){
    event.preventDefault();
    let username = userNameInput.value;
    let password = passwordInput.value;    
  
    console.log(username);
    console.log(password);
    if(username == "Baby Yoda" && password == "Squirtle"){
        console.log("CORRECT");
        correct.style.display = "block";
        incorrect.style.display = "none";
        body.style.backgroundColor ="lightblue";


    }
    else{
        incorrect.style.display = "block";    
        correct.style.display = "none";
        body.style.backgroundColor ="rgb(50, 50, 50)";
    }


    
userNameInput.value ="";
passwordInput.value = "";
   
}