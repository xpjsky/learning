/**
 * Created with JetBrains WebStorm.
 * User: Paddy
 * Date: 3/20/13
 * Time: 3:39 PM
 * To change this template use File | Settings | File Templates.
 */
var ctx;


var init = function() {

    var cvs = document.getElementById("cvs");
    ctx = cvs.getContext("2d");

    var worker = new Worker("js/run.js");
    worker.postMessage(1);
    worker.onmessage = function(event) {
        var deg = event.data;
        draw(deg);
    }
}

function draw(deg) {
    ctx.restore();
    ctx.clearRect(0, 0, 800, 600);

    ctx.save();
    ctx.translate(400, 200);
    ctx.rotate(Math.PI/180 * deg);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(-50, 100);
    ctx.lineTo(50, 100);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.strokeStyle="#00F";
    ctx.lineWidth=2;
    ctx.stroke();
}