let a=document.getElementById("divid");

function demo()

{

	c.classList.toggle("line");
}

let b=document.createElement("input");

b.type="checkbox";


b.id="access1";

b.onclick=function ()
{
	demo();
}


a.appendChild(b);

let c=document.createElement("label");

b.setAttribute("for","access1");

c.textContent="Click Me";

c.id="access2";

a.appendChild(c);
