/**
 * Created with JetBrains WebStorm.
 * User: Paddy
 * Date: 3/20/13
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */
var websocket;

var init = function() {
    websocket = new WebSocket("ws://localhost:8080/websocket/test");

    websocket.onopen = function(event) {
        log("socket open");
    }

    websocket.onclose = function(event) {
        log("socket close");
    }

    websocket.onmessage = function(event) {
        var text = event.data;
        log(text);
    }

    alert("ttt")
    websocket.send("this is a test2");
}

var echo = function() {

    websocket.send("this is a test");
}


function log(message) {
    var console = document.getElementById('console');
    var p = document.createElement('p');
    p.style.wordWrap = 'break-word';
    p.appendChild(document.createTextNode(message));
    console.appendChild(p);
    while (console.childNodes.length > 25) {
        console.removeChild(console.firstChild);
    }
    console.scrollTop = console.scrollHeight;
}