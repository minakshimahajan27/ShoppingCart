let main=document.querySelector('.main')
let card1=document.querySelector('#card1');
let card2=document.querySelector('#card2');
let blog=document.getElementById('trend2');
let abouts=document.getElementById('about');
let contact=document.querySelector('.contact');
let form=document.querySelector('.form')
let cart=document.querySelector('.cart')

function homes(){
    main.style .display='flex';
    card1.style .display='block';
    card2.style .display='block';
    blog. style .display='block';
    
    document.getElementById('blog').style.color="black"
    document.getElementById('home').style.color="rgb(9, 217, 217)"
    document.getElementById('shops').style.color="black"
    document.getElementById('contect').style.color="black"
    document.getElementById('about').style.color="black"
}

function shops(){
    main.style . display="none";
    blog.style .display='none';
    card1.style .display='block';
    card2.style .display='block'; 
    abouts.style.display="none";
    cart.style.display='none';
    document.getElementById('blog').style.color="black"
    document.getElementById('home').style.color="black"
    document.getElementById('shop').style.color="rgb(9, 217, 217)"
    document.getElementById('contect').style.color="black"
    document.getElementById('about').style.color="black"
}


function blogs(){
    main.style . display="none";
    card1.style .display='none';
    card2.style .display='none';
    blog. style .display='block';
    abouts.style.display="none";
    contact.style.display="none";
    form.style.display='none';
    cart.style.display='none';
    document.getElementById('blog').style.color="rgb(9, 217, 217)"
    document.getElementById('home').style.color="black"
    document.getElementById('shops').style.color="black"
    document.getElementById('contect').style.color="black"
    document.getElementById('about').style.color="black"
}

function about(){
    main.style . display="none";
    card1.style .display='none';
    card2.style .display='none';
    blog. style .display='none';
    abouts.style.display="block";
    cart.style.display='none';
    document.getElementById('blog').style.color="black"
    document.getElementById('home').style.color="black"
    document.getElementById('shops').style.color="black"
    document.getElementById('contect').style.color="black"
    document.getElementById('about').style.color="rgb(9, 217, 217)"
}

function contacts(){
    main.style . display="none";
    card1.style .display='none';
    card2.style .display='none';
    blog. style .display='none';
    abouts.style.display="none";
    contact.style.display="block";
    form.style.display='block';
    cart.style.display='none';
    document.getElementById('blog').style.color="black"
    document.getElementById('home').style.color="black"
    document.getElementById('shops').style.color="black"
    document.getElementById('contact').style.color="rgb(9, 217, 217)"
    document.getElementById('about').style.color="black"
}

// cart
function show(img){
    let newimg=document.getElementById("newimg")
    console.log(img);
    newimg.src=img.src;

    document.querySelector('.cart').style.display='flex';
    main.style . display="none";
    card1.style .display='none';
    card2.style .display='none';
    blog. style .display='none';
    abouts.style.display="none";
    contact.style.display="none";
    form.style.display='none';

}

function addcart(){
    alert("added to cart");
    location.reload();

}
function addbtn(){
    alert("added to btn");
    location.blog.reload();
}


