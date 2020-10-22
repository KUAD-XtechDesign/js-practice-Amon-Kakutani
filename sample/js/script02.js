$(function(){
let txt1="おはよう";
let txt2="愛してる";
let txt3="愛してる。。。あの世でも。。。";
let txt4="RIP";
let txt5="9余り2";
let txt6="9...2";
let num1=29;
let num2=3;



$("#button01").on("click",function(){
    $("#content").text(txt1);
})

$("#button02").on("click",function(){
    $("#content").append(txt2);
})
$("#button03").on("click",function(){
    $("#content").append(txt3);
})
$("#button04").on("click",function(){
    $("#content").text(txt4);
})
$("#button05").on("click",function(){
    $("#content").text(txt6);
})

$("#button06").on("click",function(){
    $("#content").text
    (num1+"÷"+num2+"="+txt5+"やで");
})

});
