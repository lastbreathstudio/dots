(function (){

    "use strict";

    //random color function
    function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function circle (){
    //window height and width
    var h = screen.height;
    var w = screen.width;
    var circleDiv = document.createElement("div");
    circleDiv.id = 'circle1';
    
    //circle css styles

    circleDiv.style.height = 20+ "px";
    circleDiv.style.width = 20 + "px";
    circleDiv.style.backgroundColor = getRandomColor();
    circleDiv.style.borderRadius = 20 + "px";
    circleDiv.style.position = "absolute";
    circleDiv.className = "animated flash";
    circleDiv.style.zIndex = -9999;
    circleDiv.style.top = (Math.random() * h + 1-150) + "px";
    circleDiv.style.left = (Math.random() * w + 1-50) + "px";
    
    document.body.appendChild(circleDiv);
    setTimeout(clearCirlce,2500);
}

function clearCircle(){
     var circleCreated = document.getElementById("circle1");
     circleCreated.parentNode.removeChild(circleCreated);
}

for(var i = 0;i<5;i++){
    setInterval(circle,Math.random() * 50000);
}

})()
