$(function(){
let txt1="おはよう";
let txt2="ハウアーユー";
let num1=20;
let num1=32;

$("#button01").on("click",function(){
    $("#content").text("おはよう");
})

$("button02").on("click",function(){
    $("#content").text(ハウアーユー);
})
$("#button03").on("click",function(){
    $("#content").text(おはよう+ハウアーユー);
})
$("#button04").on("click",function(){
    $("#content").text(20+32);
})

$("#button05").on("click",function(){
    $("#content").text(20+"たす"+30+"は"+(20+32)+"です");
})

});
