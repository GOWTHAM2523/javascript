let a=document.getElementById("p1");

function increase ()
{
    let pv=a.textContent;
    let uv=parseInt(pv)+1;

    if(uv>0)
    {
        a.style.color="green";
    }
   a.textContent=uv; 
}

function reset ()
{
    let pv=a.textContent;
    let uv=parseInt(pv);

    if(uv=0)
    {
        a.style.color="black";
    }
   a.textContent=uv; 
}


function decrease ()
{
    let pv=a.textContent;
    let uv=parseInt(pv)-1;

    if(uv<0)
    {
        a.style.color="Red";
    }
   a.textContent=uv; 
}
