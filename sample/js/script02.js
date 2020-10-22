$(function(){
let txt1="おはよう";
let txt2="ハウアーユー";
let num1=29;
let num2=3;
let num3="9余り2";

$("#button01").on("click",function(){
    $("#content").extend("ヤッホー");
})

$("#button02").on("click",function(){
    $("#content").extend(txt1);
})
$("#button03").on("click",function(){
    $("#content").extend(txt1+txt2);
})
$("#button04").on("click",function(){
    $("#content").extend(num1+num2);
})

$("#button05").on("click",function(){
    $("#content").extend(num1+"÷"+num2+"="+num3+"やで");
})

});
