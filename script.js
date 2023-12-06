let count=0;
let left=0;
let id=0;
let score=0;
let miss=0;

document.addEventListener('keydown', (event)=> {  
    
    if(event.key==="ArrowRight"&& count<screen.width-200){
       
        moveright();
    }
    if(event.key==="ArrowLeft" && count>0){
        moveleft();
    }

});

// Bucket move right and left 
function moveright(){

    let box=document.getElementById("move");
    count=count+10;
    box.style.left=count+"px";
}


function moveleft(){

    let box=document.getElementById("move");
    count=count-10;
    box.style.left=count+"px";
}



// onload fruit fall 
window.onload = function(){

    var Create=setInterval(function(){

    //    Create Fruit Element
        id++;
            var div=document.createElement("div");
            div.classList="fruit";
            div.style.top="20px";
            div.style.left=Math.floor(Math.random()*1000 + 1)+"px";
            div.id=id;
            document.body.appendChild(div);

            movedown(id);


      
 },3000);

}

       // MOVE Fruit Down 

       function movedown(id){
     
        var fruit=document.getElementById(id);
        var down=0;
    
        var move=setInterval(function(){
            down=down+50;
            fruit.style.top=down+"px";

            if(down<screen.height-180){
                let box=document.getElementById("move");

                let boxtop=box.offsetTop;
                let boxleft=box.offsetLeft;
           
        
              if(fruit.offsetTop>=boxtop+20){
        
                if(fruit.offsetLeft>boxleft && fruit.offsetLeft<boxleft+150){
                console.log("catch fruit");
                score=score+10;
                document.getElementById("score").innerHTML=score;
                 fruit.parentNode.removeChild(fruit);
                 clearInterval(move);
                }
            }
              
            }else{
             
               miss++;
               document.getElementById("miss").innerHTML=miss;
  

                // Game OVER 
                if(miss>5){
                    
                    alert(`Game over you miss more than 5 Mango Click on OK to Restart`);
                    location.reload();
                   
                }
                fruit.parentNode.removeChild(fruit);
                clearInterval(move);
               
            }

            
        },1000);
    } 



