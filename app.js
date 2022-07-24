var screen = document.getElementById("screen")
var iscalculated;
function getvaluebtn(val) {
    if (iscalculated && typeof val == "number") {
        screen.value = "";
    }
    screen.value += val;
    iscalculated = false;
}
function equalbtn() {
    screen.value = eval(screen.value);
    iscalculated = true;
}
function clearbtn() {
    screen.value = "";
}
// var screen = document.getElementById("screen")
// function getvaluebtn(val){
//     var screen= val
//     screen.value += val
// }



































