var deg=1;
onmessage = function(event) {
    deg = event.data;
    run(deg);
}

function run(deg) {
    while(true) {
        postMessage(deg);
        deg++;
        if(deg>360) {
            deg = 1;
        }
    }
}