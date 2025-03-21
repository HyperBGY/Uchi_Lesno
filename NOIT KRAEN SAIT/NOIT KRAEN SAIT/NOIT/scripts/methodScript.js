let hasPassed = true;


let i = 1;
console.log(`i = ${i}`);
let j = 1;
console.log(`j = ${j}`);



function unlockMethodFunction(){




        i++;

        console.log(`i = ${i}`);

        document.getElementById(`exercisesBox${i-1}`).style.display="flex";//pokazwa wuprosite
        document.getElementById(`exercisesBox${i-1}`).style.flexDirection="column";//pokazwa wuprosa
        document.getElementById(`exercisesBox${i-1}`).style.position="fixed";
        document.getElementById(`exercisesBox${i-1}`).style.flexDirection="column";

        document.getElementById(`exerciseButton${i + 1}`).disabled=true;//butona na sledwashiq metod da ne raboti
        document.getElementById(`exerciseButton${i - 1 }`).disabled=true;//butona na predishniq metod da ne raboti
        document.getElementById(`exerciseButton${i}`).disabled=false;//butona na segashniq metod da raboti






    }

function nextQuestionFunction(){


    if (i == 2){

        if (j < 3){
            j++;
            console.log(`j = ${j}`);
            document.getElementById(`question${j}`).style.display="flex";//pokazwa wuprosa
            document.getElementById(`question${j}`).style.flexDirection="column";//pokazwa wuprosa
            document.getElementById(`question${j}`).style.alignContent="center";//pokazwa wuprosa
            document.getElementById(`question${j}`).style.animation = "slide-in 0.3s";
            document.getElementById(`question${j - 1}`).style.display="none";//skriwa minaliq wuppros
        }
        if (j > 2)
        { 
            j++
            document.getElementById(`exercisesButton${i-1}`).style.backgroundColor="rgb(66, 202, 150)";
            document.getElementById(`exercisesButton${i-1}`).style.animation = "glow 0.7s ease-in-out 0.1s forwards";

        }
        if (j > 4){
    
            j = 1;
    
            document.getElementById(`exerciseButton${i + 2}`).disabled=true;
            document.getElementById(`exerciseButton${i + 1}`).disabled=false;
    
            document.getElementById(`exercisesBox${i-1}`).style.position="";

            document.getElementById(`exercisesBox${i - 1}`).style.animation = "fade-out 0.1s forwards";

            console.log(`Next question please`)

            let method = document.getElementById(`method${i}`);
            method.style.animation = "method-unlock 0.2s ease-in-out forwards";


            document.getElementById(`method${i-1}`).style.position = "relative"; //slaga zelenoto triygylni4e 

            var triangle = document.createElement("div");

            triangle.style.width = "60px";
            triangle.style.height = "60px";

            triangle.style.backgroundColor = "rgb(66, 202, 150)";

            triangle.style.clipPath = "polygon(0 0, 100% 0, 0 100%)";

            triangle.style.position = "absolute";
            triangle.style.top = "0";
            triangle.style.left = "0";

            document.getElementById(`method${i-1}`).appendChild(triangle);
            
    
    
    
        }

    }

    else if (i >= 3){

        if (j < 3){
            j++;
            console.log(`j = ${j}`);
            document.getElementById(`question${j + 3}`).style.display="flex";//pokazwa wuprosa
            document.getElementById(`question${j + 3}`).style.display="flex";//pokazwa wuprosa
            document.getElementById(`question${j + 3}`).style.flexDirection="column";//pokazwa wuprosa
            document.getElementById(`question${j + 3}`).style.alignContent="center";//pokazwa wuprosa
            document.getElementById(`question${j + 3}`).style.animation = "slide-in 0.3s";
            document.getElementById(`question${j + 2}`).style.display="none";//skriwa minaliq wuppros
        }
        if (j > 2)
        { 
            j++
            document.getElementById(`exercisesButton${i-1}`).style.backgroundColor="rgb(66, 202, 150)";
            document.getElementById(`exercisesButton${i-1}`).style.animation = "glow 0.7s ease-in-out 0.1s forwards";
        }
        if (j > 4){
    
            j = 1;
    
            document.getElementById(`exerciseButton${i + 2}`).disabled=true;
            document.getElementById(`exerciseButton${i + 1}`).disabled=false;
    
            document.getElementById(`exercisesBox${i-1}`).style.position="";

            document.getElementById(`exercisesBox${i - 1}`).style.animation = "fade-out 0.1s forwards";

            console.log(`Next question please`)

            let method = document.getElementById(`method${i}`);
            method.style.animation = "method-unlock 0.2s ease-in-out forwards";
            

            document.getElementById(`method${i-1}`).style.position = "relative";

            var triangle = document.createElement("div");

            triangle.style.width = "60px";
            triangle.style.height = "60px";

            triangle.style.backgroundColor = "rgb(66, 202, 150)";

            triangle.style.clipPath = "polygon(0 0, 100% 0, 0 100%)";

            triangle.style.position = "absolute";
            triangle.style.top = "0";
            triangle.style.left = "0";

            document.getElementById(`method${i-1}`).appendChild(triangle);
    
        }

    }



    
}