// JHOPTIK WEBSITE SCRIPT


// Tombol Belanja Sekarang
const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", function(){

    document
    .querySelector("#produk")
    .scrollIntoView({
        behavior:"smooth"
    });

});



// Tombol Beli Produk
const buyButtons = document.querySelectorAll(".card button");


buyButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const productName =
        this.parentElement.querySelector("h3").innerText;


        const price =
        this.parentElement.querySelector("p").innerText;


        const message =
        `Halo JHOPTIK, saya ingin membeli ${productName} (${price})`;


        const phone =
        "6281389664022";


        const whatsapp =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsapp,
            "_blank"
        );


    });

});




// Animasi muncul saat scroll

const cards =
document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let posisi =
card.getBoundingClientRect().top;


let tinggi =
window.innerHeight;


if(posisi < tinggi - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}


});


});



// kondisi awal animasi

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="0.6s";

});

function filterProduct(category){


let products =
document.querySelectorAll(".product");


products.forEach(function(item){


if(category=="all"){

item.style.display="block";

}

else if(item.classList.contains(category)){


item.style.display="block";


}

else{


item.style.display="none";


}


});


}

// =====================
// KERANJANG
// =====================


let cart =
JSON.parse(localStorage.getItem("cart")) || [];



function addCart(name,price){


cart.push({

name:name,
price:Number(price)

});


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("Produk masuk keranjang");

}




function loadCart(){


let list =
document.getElementById("cartList");


if(!list) return;


let total=0;


list.innerHTML="";


cart.forEach(item=>{


total += item.price;


list.innerHTML += `

<div>

<h3>${item.name}</h3>

<p>
Rp ${item.price.toLocaleString()}
</p>

</div>

`;

});


document.getElementById("total")
.innerHTML =
"Total : Rp "+total.toLocaleString();


}




function checkout(){


let text =
"Halo JHOPTIK saya ingin membeli:%0A";


cart.forEach(item=>{

text +=
"- "+item.name+
" Rp "+
item.price+
"%0A";

});


window.open(

"https://wa.me/6281389664022?text="+text,

"_blank"

);


}




// =====================
// ADMIN PRODUK
// =====================


let products =
JSON.parse(localStorage.getItem("products"))
|| [];



function addProduct(){


let data={

name:
document.getElementById("name").value,


price:
document.getElementById("price").value,


image:
document.getElementById("image").value,


category:
document.getElementById("category").value

};



products.push(data);



localStorage.setItem(
"products",
JSON.stringify(products)
);



alert("Produk berhasil ditambah");


}



function loadAdmin(){


let area =
document.getElementById("adminList");


if(!area)return;


area.innerHTML="";


products.forEach(p=>{


area.innerHTML +=`

<div>

<h3>
${p.name}
</h3>

<p>
Rp ${p.price}
</p>

</div>

`;


});


}



loadCart();

loadAdmin();


const menu =
document.querySelector(".menu-btn");


const nav =
document.querySelector("nav");


if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}