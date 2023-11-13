function getfach() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const container = document.getElementById("container");

            json.forEach(element => {
                
                let card = document.createElement("div");
                card.className = "card";

                
                let photoProduct = document.createElement("img");
                photoProduct.src = element.image;
                card.appendChild(photoProduct);

               
                let titleing = document.createElement("p");
                titleing.innerText = element.title;
                card.appendChild(titleing);

                
                let priceing = document.createElement("p");
                priceing.innerText = `$ ${element.price}`;
                card.appendChild(priceing);

                
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

getfach();



let signInForm = document.getElementById("signup");
let inputName = document.getElementById("floatingInputName");
let inputEmail = document.getElementById("floatingInputEmail");
let inputPassword = document.getElementById("floatingPassword");

signInForm.addEventListener("click", function(event) {//event obj it predifined in addEventListener and we have event loop!! search for it!!

    
        event.preventDefault();
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;
    console.log( password);
    console.log(    password.includes(''))
    if (name.length>5 && password.length>8 && !password.includes(" ")) {
        postRegistrationData(name, email, password);
    }else{
        let error = document.createElement("div");
        signInForm.insertAdjacentElement("afterend",error)
                error.innerText = "YOur Login is filled check your date"
                error.style.backgroundColor="red"
                error.classList.add("mt-3")
    }
    
    
    

    
});

function postRegistrationData(name, email, password) {
    fetch('https://65523ba35c69a7790329bd14.mockapi.io/store', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}



