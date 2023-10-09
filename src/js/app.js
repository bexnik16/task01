fetch("db.json")
.then(response => response.json())
.then(data => {
    let html = '';
    data.products.forEach(item => {
        html += 
        `
            <div class="product">
                <img src="${item.image}" class="product-img" alt="">
                <div class="product-info">
                    <div class="info">
                        <a href="" class="sort">${item.category}</a>
                    </div>
                    <h2>
                        <a href="">${item.name}</a>
                    </h2>
                    <div class="span">
                        <span class="font-small">By <a href="">${item.manufacturer}</a></span>
                    </div>
                    <div class="price-info">
                        <div class="product-price">
                            <span>$${item.price}</span>
                            <del class="old-price">$${item.oldPrice}</del>
                        </div>
                        <div class="add-cart">
                            <button class="add" href="" data-id = "${item.id}" data-price = "${item.price}"
                            data-name = "${item.name}"
                            data-img = "${item.image}">
                            <img src="./src/image/icon-cart.svg" alt="">
                            Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    if(localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", JSON.stringify([]));
        document.querySelector("#count").innerHTML = 0;
    } else {
        let basket = JSON.parse(localStorage.getItem("basket"));
        document.querySelector("#count").innerHTML = basket.length;
    }
    
    
   
        document.querySelector(".container").innerHTML = html;
        
    
    
        let addButton = document.querySelectorAll(".addbasketbtn");


        addButton.forEach(btn => {
            btn.addEventListener("click", function() {
                if(localStorage.getItem("basket") == null) {
                    localStorage.setItem("basket", JSON.stringify([]));
                }
                
               

                let basket = JSON.parse(localStorage.getItem("basket"));
    
                let data_id = btn.getAttribute("data-id");
                let data_price = Number(btn.getAttribute("data-price")).toFixed(2);
                let data_name = btn.getAttribute("data-name");
                let data_img = btn.getAttribute("data-img");
    
    
                if element = basket.find(a => {
                    return a.id == btn.getAttribute("data-id")
                })       === undefined){
                     let item = {
                        id: data_id,
                        count: 1,
                        price: data_price,
                        name: data_name,
                        img: data_img
                }
                basket.push(item)
                }else {
                    element.count++;
                }
    
                localStorage.setItem("basket", JSON.stringify(basket));
                document.querySelector("#count").innerHTML = basket.length;
            })
        })
    
    
    
    



    var basket = []; 
    var total = 0;  
  
    function addToBasket(productName, productPrice) {
        var product = {
            name: productName,
            price: productPrice
        };
        basket.push(product);
        total += productPrice; 

        
        var cartContent = document.getElementById("cart-content");
        var totalPriceElement = document.getElementById("total-price");
        cartContent.innerHTML = ""; 

        
        basket.forEach(function (item) {
            var cartItem = document.createElement("div");
            cartItem.className = "cart-box";
            cartItem.innerHTML = `
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg">
                <div class="detail-box">
                    <div class="cart-product-title">${item.name}</div>
                    <div class="cart-price">$${item.price.toFixed(2)}</div>
                </div>
                <i class="fa-regular fa-trash-can cart-remove" onclick="removeFromBasket('${item.name}', ${item.price})"></i>
            `;
            cartContent.appendChild(cartItem);
        });

       
        totalPriceElement.textContent = "$" + total.toFixed(2);
    }

    
    function removeFromBasket(productName, productPrice) {
        var index = basket.findIndex(function (item) {
            return item.name === productName;
        });

        if (index !== -1) {
            basket.splice(index, 1); 
            total -= productPrice; 

            
            var cartContent = document.getElementById("cart-content");
            var totalPriceElement = document.getElementById("total-price");
            cartContent.removeChild(cartContent.childNodes[index]);
            totalPriceElement.textContent = "$" + total.toFixed(2);
        }
    }


    var myWebsiteData = {
        siteTitle: "My Website",
        featuredCategories: ["Cake&Milk", "Coffes&Teas", "Pet Foods", "Vegetables"],
       
    };

    
    localStorage.setItem("myWebsiteData", JSON.stringify(myWebsiteData));

    var retrievedData = localStorage.getItem("myWebsiteData");
    var parsedData = JSON.parse(retrievedData);

   
    console.log(parsedData.siteTitle);
    console.log(parsedData.featuredCategories);
