function sin(){
    document.calculator.result.value=Math.sin(document.calculator.result.value);
}

function cos(){
    document.calculator.result.value=Math.cos(document.calculator.result.value);
}

function tan(){
     document.calculator.result.value=Math.tan(document.calculator.result.value);
}

function logorithm() {
document.calculator.result.value = Math.log(document.calculator.result.value);
 }

function BACKSPC(){
    var a = document.calculator.result.value;
    document.calculator.result.value = a.substr(0,a.lenth-1);
}

function pi(){
    document.calculator.result.value += Math.PI;
}

function e(){
    document.calculator.result.value = Math.E;
}

function root(){
     document.calculator.result.value = Math.sqrt(document.calculator.result.value);
}

function sqrt3(){
document.calculator.result.value = Math.pow(document.calculator.result.value, 1/3);
} 

function deleteChar(){
    document.calculator.result.value = document.calculator.result.value.substring(0,  document.calculator.result.value.length - 1)
}
function square(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
}

function mod(){
    document.calculator.result.value = Math.mod(document.calculator.result.value);
}

function number(value){
    document.calculator.result.value += value;
}

function equal(){
    document.calculator.result.value = eval(document.calculator.result.value);
}

function changeSign(value) {
    if(document.calculator.result.value.substring(0, 1) == "-")
    document.calculator.result.value = document.calculatorresult.value.substring(1, value.length)
    else
    document.calculator.result.value = "-" + document.calculator.result.value;
}

function abs(){
    document.calculator.result.value = Math.abs(document.calculator.result.value);
}

function log(){
    document.calculator.result.value = Math.log(document.calculator.result.value);
}
function exp(){
    document.calculator.result.value = Math.exp(document.calculator.result.value);
}

function ceil(){
    document.calculator.result.value = Math.ceil(document.calculator.result.value);
}

function round(){
    document.calculator.result.value = Math.round(document.calculator.result.value);
}

function floor(){
    document.calculator.result.value = Math.floor(document.calculator.result.value);

}
function cubed(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 3);
}

// memory functions that stores data in the memory and add them in the memory
function memory_p() {
    if (document.calculator.result.value =='') { return }
    document.calculator.result.value += '+'+document.calculator.result.value;
    document.calculator.result.value=eval(document.calculator.result.value);
}

// memory function that subtract data from the memory
function memory_s() {
    if (document.calculator.result.value =='') { return }
    document.calculator.result.value += '-'+document.calculator.result.value;
    document.calculator.result.value=eval(document.calculator.result.value);
}