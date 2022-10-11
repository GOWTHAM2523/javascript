let a=document.getElementById("button1");
let b=document.getElementById("button2");
let c=document.getElementById("button3");
let d=document.getElementById("button4");
let e=document.getElementById("button5");
let f=document.getElementById("button6");


function stop ()
{
    a.style.backgroundColor="Red";
    b.style.backgroundColor="gray";
    c.style.backgroundColor="gray";
    d.style.backgroundColor="Red";
    e.style.backgroundColor="gray";
    f.style.backgroundColor="gray";

}

function Ready ()
{
    a.style.backgroundColor="gray";
    b.style.backgroundColor="yellow";
    c.style.backgroundColor="gray";
    d.style.backgroundColor="gray";
    e.style.backgroundColor="yellow";
    f.style.backgroundColor="gray";

}

function go ()
{
    a.style.backgroundColor="gray";
    b.style.backgroundColor="gray";
    c.style.backgroundColor="Green";
    d.style.backgroundColor="gray";
    e.style.backgroundColor="gray";
    f.style.backgroundColor="Green";

}