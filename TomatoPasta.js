let heading=document.getElementById("head");

let image=document.getElementById("img");

let list=document.getElementById("listofitem");


let objectname = 

{

head:"TomatoPasta",

img:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",

arr:["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]


};



heading.textContent=objectname.head;

image.src=objectname.img;

let a=objectname.arr;


for (let n of a)
{

let b=document.createElement("li");

b.textContent=n;

list.appendChild(b);

}



