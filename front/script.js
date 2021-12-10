

function register() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    registerUser(email, password)
  }

  function login() {
    let email = document.getElementById('emailLog').value;
    let password = document.getElementById('passwordLog').value;
    loginUser(email, password)
  }
  
function openReg(){
    document.getElementById("reg").style.display = "block";
}
function openLog(){
    document.getElementById("log").style.display = "block";
}

function closeReg(){
    document.getElementById("reg").style.display = "none";
}
function closeLog(){
    document.getElementById("log").style.display = "none";
}
