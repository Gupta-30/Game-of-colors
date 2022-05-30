items=document.querySelectorAll('.item');
image=document.querySelector('img');
btn= document.querySelector('.btn');
let music=new Audio("music.wav");
gameover=0;
var k;
generatecolor(6);
k=6;
//function start(){
items.forEach(e => {
    e.addEventListener("click",()=>{
        music.play();
        if(gameover==0){
        e.style.border="4px solid white";
        checkwin(e);}
    }); }); 
    easy=document.querySelector('.easy');
    easy.addEventListener("click",()=>{
        document.querySelector('.item-3').style.width=0;
        document.querySelector('.item-4').style.width=0;
        document.querySelector('.item-5').style.width=0;
        k=3;
        btn.style.width="0px";
        btn.style.fontSize="0px";
        btn.style.height="0px";
        image.style.width="0px";
        image.style.height="0px";
        items.forEach(e => {
            e.style.border="none";
            
        });
       generatecolor(3);
       gameover=0;
       
        
    });
       

    hard=document.querySelector('.hard');
    hard.addEventListener("click", ()=>{
        document.querySelector('.item-3').style.width="100px";
        document.querySelector('.item-4').style.width="100px";
        document.querySelector('.item-5').style.width="100px";
        generatecolor(6);
        btn.style.width="0px";
        btn.style.fontSize="0px";
        btn.style.height="0px";
        image.style.width="0px";
        image.style.height="0px";
        items.forEach(e => {
            e.style.border="none";
            
        });
        k=6;      
        gameover=0;

    });

    

    

function checkwin(e){
   
    if(e.style.background==document.querySelectorAll('.item')[idx].style.background){
        gameover=1;
        btn.style.width="0px";
        btn.style.fontSize="0px";
        btn.style.height="0px";
        image.style.width="85px";
        image.style.height="73px";

        items.forEach(p => {
            p.style.background=e.style.background;
            
        });
        document.querySelector('.details').innerHTML="CORRECT!!";
        document.querySelector('.details').style.color="green";
    }else{
        document.querySelector('.details').innerHTML="WRONG!!";
        document.querySelector('.details').style.color="red";
        btn.style.width="137px";
        btn.style.fontSize="18px";
        btn.style.height="31px";
       
        
       
        btn.addEventListener("click",  ()=>{
            if(e.style.border=="4px solid white"){
            e.style.background="black";
            e.style.border="none";}
    
            


    });  return; }

} 
function generatecolor(i){
arr=[0,1,2,3,4,5];
r=Math.floor(Math.random()*256);
g=Math.floor(Math.random()*256);
b=Math.floor(Math.random()*256);
document.querySelector('.details').innerHTML="rgb"+"("+r+","+g+", "+b+")";


idx=Math.floor(Math.random()*(i-1));
document.querySelectorAll('.item')[arr[idx]].style.background="rgb"+"("+r+","+g+", "+b+")";
arr.splice(idx,1);

for(j=0;j<i-1;j++){
r1=Math.floor(Math.random()*256);
g1=Math.floor(Math.random()*256);
b1=Math.floor(Math.random()*256);
document.querySelectorAll('.item')[arr[j]].style.background="rgb"+"("+r1+","+g1+", "+b1+")";

}}




    newcolor= document.querySelector('.newcolors');
    newcolor.addEventListener("click",  ()=>{
        gameover=0;
        btn.style.width="0px";
        btn.style.fontSize="0px";
        btn.style.height="0px";
        image.style.width="0px";
        image.style.height="0px";
        items.forEach(e => {
            e.style.border="none";
            
        });

    
        generatecolor(k);
    });
    

 

