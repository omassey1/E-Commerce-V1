//The variable http holds now all methods and properties of the object. 
let http = new XMLHttpRequest();
//The request is prepared with the open() method.
//The first argument sets the http method, here the GET method is used. 
//In the second argument we pass the file we want to fetch. In this case its the products.json file. 
//And last the keyword true, sets the request to be async.
http.open('get', 'products.json', true);
//Next i will execute the request with the send() function. We don't use any parameters with the send() 
//function because this is a simple get request. We only want from the server to gives us the products.json file.
http.send();
//Next we have to catch the servers response. The XMLHttpRequest object has a property called onload. 
//The onload property is fired when the transaction with the server is completed. 
//We set the onload property equal to a function, so when the onload property is fired the function is executed.
http.onload = function(){
    //Inside the function we check the readyState and the status property. 
    //To have a successful server response their values must be 4, and 200.
   if(this.readyState == 4 && this.status == 200){
    //The responseText property is holding the data from the server response. 
    //But we can not use raw json data, we have to convert them to a javascript object so we can handle them. 
    //This is done with the JSON.parse() method.
    //Now the products variable is holding an array of objects. 
      let products = JSON.parse(this.responseText);
      //Next i need an empty variable so i can add the incoming data.
      let output = "";
      //Now i have to loop trough the products, and in every iteration i will add a template literal (by using backtics ``, 
      //instead of quotes) to the output variable.
      //When we use this syntax ${item.image} we can add javascript values in a template literal. 
      for(let item of products){
         output += `
            <div class="product">
               <img src="${item.image}" alt="${item.Description}">
               <p class="title">${item.Name}</p>
               <p class="description">${item.Description}</p>
               <p class="price">
                  <span>${item.Price}</span>
               </p>
               <p class="cart"> Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>
         `;
         `
         <div class="footer-basic">
        <footer>
            <div class="social"><a href="https://www.instagram.com"><i class="icon ion-social-instagram"></i></a><a href="https://www.snapchat.com/en-US"><i class="icon ion-social-snapchat"></i></a><a href="https://twitter.com"><i class="icon ion-social-twitter"></i></a><a href="https://www.facebook.com"><i class="icon ion-social-facebook"></i></a></div>
          <hr style="height:2px;border-width:0;color:gray;background-color:white">
            <ul class="list-inline">
                <li class="list-inline-item"><a href="home.html">Home</a></li>
                <li class="list-inline-item"><a href="products.html">Products</a></li>
                <li class="list-inline-item"><a href="contact.html">Contact</a></li>
            </ul>
            <p class="copyright">Tay's Bookstore © 2022</p>
        </footer>
    </div>
         `;
        }
     //And last i will target the products container and add the data that the output variable holds.
      document.querySelector(".products").innerHTML = output;

   }

}