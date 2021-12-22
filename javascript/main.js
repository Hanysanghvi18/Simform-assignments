var ms= "";

function degree(){
    document.calculator.result.value = (document.calculator.result.value * Math.PI) / 180;
}
function fixed_to_exponent(){
    document.calculator.result.value = (document.calculator.result.value- 32) / 1.8;
}

// Memory functions that can save and remove data from the memory.
function memory_p() {
    if (document.calculator.result.value =='') { return }
    ms += '+'+document.calculator.result.value;
    document.calculator.result.value = 0;
}
function memory_s() {
    if (document.calculator.result.value =='') { return }
    ms += '-'+document.calculator.result.value;
    document.calculator.result.value = 0;
}
function print_ms(){
    if(ms){
        document.calculator.result.value = eval(ms);
    }
}

// Trigonometry functions.
function sin(){
    document.calculator.result.value=Math.sin(document.calculator.result.value);
}
function asin(){
    document.calculator.result.value=Math.asin(document.calculator.result.value);
}
function asinh(){
    document.calculator.result.value=Math.asinh(document.calculator.result.value);
}
function sinh(){
    document.calculator.result.value=Math.sinh(document.calculator.result.value);
}
function cos(){
    document.calculator.result.value=Math.cos(document.calculator.result.value);
}
function acos(){
    document.calculator.result.value=Math.acos(document.calculator.result.value);
}
function acosh(){
    document.calculator.result.value=Math.acosh(document.calculator.result.value);
}
function cosh(){
    document.calculator.result.value=Math.cosh(document.calculator.result.value);
}
function tan(){
     document.calculator.result.value=Math.tan(document.calculator.result.value);
}
function atan(){
    document.calculator.result.value=Math.atan(document.calculator.result.value);
}
function atan2(){
    document.calculator.result.value=Math.atan2(document.calculator.result.value);
}
function tanh(){
    document.calculator.result.value=Math.tanh(document.calculator.result.value);
}

// Math functions.
function abs(){
    document.calculator.result.value = Math.abs(document.calculator.result.value);
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

// gives the pi value of given number.
function pi(){
    document.calculator.result.value *= Math.PI;
}

function e(){
    document.calculator.result.value *= Math.E;
}
function log(){
    document.calculator.result.value = Math.log(document.calculator.result.value);
}

// it clears all the number
function Clear() {
    document.calculator.result.value = '';
    ms = 0;
}
function deleteChar(){
    document.calculator.result.value = document.calculator.result.value.substring(0,  document.calculator.result.value.length - 1)
}

function square(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
}

// gives 1/x value of given number
function half(){
    document.calculator.result.value = (1/document.calculator.result.value) ;
}

function exp(){
    document.calculator.result.value = Math.exp(document.calculator.result.value);
}

function root(){
    document.calculator.result.value = Math.sqrt(document.calculator.result.value);
}

// Brackets
function openbracket(value){
    document.calculator.result.value += value;
}
function closebracket(value){
    document.calculator.result.value += value;
}

// n! gives factorial of the given number.
function factorial(){
    var i,num,f;
    f=1;
    num= document.calculator.result.value;
    for (i = 1; i <= num ; i++){
        f=f*i;     
    }
    i=i-1;
    document.calculator.result.value =f;
}

function cubed(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 3);
}

// Gives 10 raised to the power of given number
function ten_power_x(){
    var i,num,f;
    f=1;
    num=document.calculator.result.value;
    for (i = 1; i <= num ; i++){
        f=f*10;     
    }
    
    document.calculator.result.value =f;
}

function logorithm() {
    document.calculator.result.value = Math.log(document.calculator.result.value);
}
// provides negative/positive value to the value.
function changeSign() {
    var positive = document.calculator.result.value;
    var negative = positive * -1;
    document.calculator.result.value = negative;
}

function sqrt3(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 1/3);
} 

// The modulus operator (%) returns the division remainder.
function mod(value){
    document.calculator.result.value +=value;
}

function number(value){
    document.calculator.result.value += value;
}

function equal(){
    document.calculator.result.value = eval(document.calculator.result.value);
}
