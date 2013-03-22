var ctx;

var init = function () {

    // 填充模式
    //
    // 边框模式
    // ctx.lineWidth  default=1, 边框向外伸展
    //
    //

    var cvs = document.getElementById("cvs");
    ctx = cvs.getContext("2d");

    ctx.save();
    //起点平移
    ctx.translate(100, 100);
    //整体缩放
    ctx.scale(0.5, 0.5);
    //旋转角度
    ctx.rotate(Math.PI / 180 * -45);
    rect1();
    rect2();
    //clearRec();
    drawArc();

    ctx.restore();
    drawPath();

    drawImage();

    drawText();

}

// 填充模式
var rect1 = function () {
    ctx.fillStyle = "#FF0000";

    ctx.fillRect(0, 0, 100, 100);

}

// 边框模式
var rect2 = function () {
    ctx.strokeStyle = "#00F";
    ctx.lineWidth = 1;
    ctx.strokeRect(100, 100, 100, 100);
}

//清除区域
var clearRec = function () {
    ctx.clearRect(50, 50, 100, 100);
}

//绘图路径，必须结合fillStyle或者strokeStyle使用
var drawArc = function () {
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
    ctx.fill();
}

var drawPath = function () {

    // 画三角形
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(100, 300);
    ctx.lineTo(300, 300);
    ctx.closePath();

    ctx.fillStyle = "rgba(250,15,100,255)";
    ctx.fill();

    //画贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.bezierCurveTo(450, 200, 500, 400, 600, 300);
//    ctx.closePath();
    ctx.strokeStyle = "rgba(150,15,10,255)";
    ctx.stroke();

}


var drawImage = function () {
    var img = new Image();
    img.onload = function (event) {
        ctx.drawImage(img, 600, 300);
    }

    img.src = "image/1.JPG";
}

var drawText = function () {
//    fillText

    ctx.font = "italic 30px sans-serif";
    ctx.fillStyle = "#00F";
    ctx.fillText("Hello World", 100, 400, 120);

    ctx.font = "bold 30px sans-serif";
    ctx.strokeStyle = "#F00";
    ctx.strokeText("Hello World", 100, 500, 120);

}






















