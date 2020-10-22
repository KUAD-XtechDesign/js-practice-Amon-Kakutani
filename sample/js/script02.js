$(function(){
let txt1="おはよう";
let txt2="愛してる";
let txt3="愛してる。。。あの世でも。。。";
let txt4="RIP";
let num1=29;
let num2=3;
let num3="9余り2";


$("#button01").on("click",function(){
    $("#content").text(txt1);
})

$("#button02").on("click",function(){
    $("#content").text
    (txt2);
})
$("#button03").on("click",function(){
    $("#content").text(txt3);
})
$("#button04").on("click",function(){
    $("#content").text(txt4);
})
$("#button04").on("click",function(){
    $("#content").text(num1+num2);
})

$("#button05").on("click",function(){
    $("#content").text
    (num1+"÷"+num2+"="+num3+"やで");
})

});
