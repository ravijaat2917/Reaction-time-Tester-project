const shape = document.querySelector("#myId");

let startTime = new Date().getTime();
let StartTime = new Date().getTime();

const time = document.querySelector("#span");

const totalClick = document.querySelector("#tco");
const totalTime = document.querySelector("#ttt");

shape.addEventListener("click" , e => {

    {
        var x = totalClick.innerHTML;
        x++;
        totalClick.innerHTML = x;
    }

    calculateTotalTime();

    hideShape();
    setTimeout(() => {
        showShape();
    }, 500);
});

const hideShape = () => {
    shape.style.display = 'none';
    calculateTime();
}

const showShape = () => {
    startTime = new Date().getTime();
    randomShape();
    randomColor();
    changePosition();
    shape.style.display = '';
}

const randomShape = () => {
    const num = Math.random();
    if( num < 0.50 ){
        shape.style.borderRadius = '50%';
    }else{
        shape.style.borderRadius = '0';
        shape.style.height = '60px';
        shape.style.width = '60px';
    }
    if( num < 0.33 ){
        shape.style.height = '80px';
        shape.style.width = '80px';
    }else if( num < 0.63){
        shape.style.height = '60px';
        shape.style.width = '60px';
    }else{
        shape.style.height = '100px';
        shape.style.width = '100px';
    }
}
const randomColor = () => {
    const num = Math.random();
    if( num < 0.20 ){
        shape.style.backgroundColor = 'rgb(236, 213, 34)';
    }else if( num < 0.40 ){
        shape.style.backgroundColor = 'rgb(14, 241, 241)';
    }else if( num < 0.60 ){
        shape.style.backgroundColor = 'rgb(61, 215, 30)';
    }else if( num < 0.80 ){
        shape.style.backgroundColor = 'rgb(30, 46, 215)';
    }else{
        shape.style.backgroundColor = 'rgb(226, 21, 144)';
    }
}

const calculateTime = () => {
    let endTime = new Date().getTime();

    const Reactiontime = (endTime - startTime)/1000 ;
    
    time.innerHTML = Reactiontime;
}

const changePosition = () => {
    let top = Math.random()*450 ;
    shape.style.marginTop = top+'px';
    let left = Math.random()*662 ;
    shape.style.marginLeft = left+'px';
}

const calculateTotalTime = () => {
    var endTime = new Date().getTime();

    var Reactiontime = (endTime - StartTime)/1000 ;

    ttt.innerHTML = Reactiontime ;
}