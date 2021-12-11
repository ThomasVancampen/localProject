

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

const form = document.querySelector('form');
const file = document.querySelector('input[name="file"]');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    
    const{url, fields} = await fetch("http://ec2-3-237-32-34.compute-1.amazonaws.com:3000/getuploadurl").then(response =>response.json());
    
    const data = {
        bucket: "gif-2-bucket",
        ...fields,
        'Content-Type': file.files[0].type,
        file: file.files[0],
    };
    
     const formData  = new FormData();
      for (const name in data) {
        formData.append(name, data[name]);
      }

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
    });
    


