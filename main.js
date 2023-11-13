function getfach() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{
                json.forEach(element => {
                    let conte = document.getElementById("container")
                    let card = document.createElement("div")
                    let titleing = document.createElement("p")
                    titleing.innerText = element.title;
                    conte.append(card)
                    card.appendChild(titleing);
                    card.className = "card";
                    let photoProduct = document.createElement("img");
                    photoProduct.src = element.image
                    
                    
                    card.appendChild(photoProduct)

                    let priceing = document.createElement("p")
                    priceing.innerText = ` $ ${element.price}`;
                    card.appendChild(priceing)
                    console.log(`${element}`);
                });
            });
           
    
}

getfach();