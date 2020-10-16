$(function(){
let txt1=おはよう
let txt2=ハウアーユー
let num1=20
let num1=32

$("button01").on("click",fanction(){
    $("#content").text("こんちゃ");
})

$("button02").on("click",function(){
    $("#content").text(txt1);
})
$("#button03").on("click",function(){
    $("#content").text(txt1+txt2);
})
$("#button04").on("click",function(){
    $("#content").text(num1+num2);
})

$("#button05").on("click",function(){
    $("#content").text(num1+"たす"+"は"+(num1+num2)+"です");
})

});
