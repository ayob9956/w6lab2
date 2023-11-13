
let btn4 = document.getElementById("btn4");

btn4.addEventListener("click",function() {//event obj it predifined in addEventListener and we have event loop!! search for it!!
   
  
    let inputEmailLogin = document.getElementById("floatingInput2");
    let inputPasswordLogin = document.getElementById("floatingPassword2");

    let email = inputEmailLogin.value;
    let password = inputPasswordLogin.value;
    
    login(email,password)
    

    
    })






function login(email,password) {
    console.log("dsfg");
    fetch("https://65523ba35c69a7790329bd14.mockapi.io/store")
    .then(response => response.json())
    .then(data=>{
        data.forEach(element => {
            console.log(element.email);
            if (password===element.password &&element.email===email) {
                let item = document.getElementById("items")
                let formsign = document.getElementById("formsign")
                console.log(formsign);
                formsign.className  ="hide"
                item.style.display="block"
            }else{
                let error = document.createElement("div");
                btn4.insertAdjacentElement("afterend",error)
                error.innerText = "YOur Login is filled check your date"
                error.style.backgroundColor="red"
                error.classList.add("mt-3")
            }
            
        });
        
    })
}   
