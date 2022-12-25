var r=Math.floor(Math.random() * 8+1);

n=document.getElementById("n"+r);
console.log(r);
setTimeout(function () {
    console.clear();
    n.href="correct.html";
}, 1.5);