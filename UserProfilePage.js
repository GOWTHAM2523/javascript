let a=document.getElementById("im1");

let b=document.getElementById("pid");

let c=document.getElementById("pid2");

let obj =
 {

	image:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-No-Background.png",
	
	name:"RAHUL ATTULURI",
	
	age:25,
	
 };


a.src=obj.image;

b.textContent=obj.name;

c.textContent= "Age" + ":" + " " +obj.age;







