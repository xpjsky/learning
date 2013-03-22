/**
 * Created with JetBrains WebStorm.
 * User: Paddy
 * Date: 3/20/13
 * Time: 11:38 AM
 * To change this template use File | Settings | File Templates.
 */


var saveSession = function() {
//    var input = document.getElementById("input");
//    var data = input.value;
//
//    sessionStorage.setItem("dataKey", data);
//    input.value = "";

    var img = new Image();
    img.src="img/1.JPG";
    sessionStorage.setItem("image", img);
}

var loadSession = function() {
//    var input = document.getElementById("input");
//
//    var data = sessionStorage.getItem("dataKey");
//    input.value=data;
    var img = sessionStorage.getItem("image");
    alert(img);
}

var saveLocal = function() {
    var input = document.getElementById("input");
    var data = input.value;

    localStorage.setItem("dataKey", data);
    input.value = "";
}

var loadLocal = function() {
    var input = document.getElementById("input");

    var data = localStorage.getItem("dataKey");
    input.value=data;
}

var clearLocal = function() {
    localStorage.clear();
}