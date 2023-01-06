const mode = document.getElementById("icon")
const passwordInput = document.getElementById("password")
const eye = document.getElementById("eye")



//change

mode.addEventListener ('click', () =>{
    const form = document.getElementById('login-form');
    const background = document.getElementById('container');
    if (mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
        background.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
    background.classList.remove('dark');
});

// Password

 eye.addEventListener('click', () =>{
    let inputTypeIsPassword = passwordInput.type === "password" // Variable to help in understanding

    //if this ^ true, go to the condition
    if(inputTypeIsPassword){
        passwordInput.setAttribute("type", "text")
        eye.setAttribute("src", "./assets/olhos-fechados.png")
    }
    else{
        passwordInput.setAttribute("type", "password")
        eye.setAttribute("src", "./assets/eye-open_icon-icons.com_73576.png")
    }

})





