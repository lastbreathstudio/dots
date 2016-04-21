

    "use strict";

     var app = {};
//random color function
app.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
app.randomPos = function(){
    var top = (Math.random() * 1000 + 1-150) + "px";
    var left = (Math.random() * 1000 + 1-50) + "px";
    return{
        top:top,
        left:left
    }
}

app.circle = function(amount,shape){;
    var frag = document.createDocumentFragment();
    for(var i = 0;i<22;i++){
        var h = app.randomPos()
        var circleDiv = document.createElement("div");
        circleDiv.className = shape;
        circleDiv.id = i;
        circleDiv.style.backgroundColor = app.getRandomColor();
        circleDiv.style.top = h.top;
        circleDiv.style.left = h.left;
        circleDiv.style.position = "absolute";
        frag.appendChild(circleDiv);
    }
    var wrapper = document.getElementById('wrapper');
    wrapper.appendChild(frag);
}
app.circle(22,'circle');

setInterval(set,100);

function set(){
   var h = screen.height;
   var w = screen.width;
    var div = document.querySelectorAll('.circle');
    for(var i = 0;i<div.length;i++){
            div[i].style.top = (Math.random() * h -150) + 'px';
            div[i].style.left = (Math.random() * w -50) + 'px';
        }h
}


