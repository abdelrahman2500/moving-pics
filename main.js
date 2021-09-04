var imgOne = document.getElementById("one")
var imgTwo = document.getElementById("two")
var imgThree = document.getElementById("three")
var para1 = document.getElementById("para1")
var para2 = document.getElementById("para2")

var moveBtn = document.getElementById("move")
var resetBtn = document.getElementById("reset")

var i = 0;

var timer1,timer2;
moveBtn.addEventListener("click", moveimgs)

function moveimgs(e){
    if(e.target.value == "go"){
        forward()
        e.target.value = "stop"
    } else {
        e.target.value = "go"
        clearInterval(timer1)
        clearInterval(timer2)
    }

}

function forward(){
    timer1 = setInterval("fun1()", 10)
}
function fun1(){
    imgOne.style.left = i+"px";
    imgTwo.style.right = i+"px";
    imgThree.style.bottom = i+"px";
    para1.innerText= "<img src='icon1 gif' style='left " + imgOne.style.left +"'/>"
    para2.innerText= "<img src='icon2 gif' style='right " + imgTwo.style.right +"'/>"
    i++

    if(i == 550){
        clearInterval(timer1)
        backward()
    }
}
function backward(){
    timer2= setInterval("fun2()", 10)
}
function fun2(){
    imgOne.style.left = i+"px";
    imgTwo.style.right = i+"px";
    imgThree.style.bottom = i+"px";
    para1.innerText= "<img src='icon1 gif' style='left " + imgOne.style.left +"'/>"
    para2.innerText= "<img src='icon2 gif' style='right " + imgTwo.style.right +"'/>"
    i--;

    if(i == 0){
        clearInterval(timer2)
        forward()
    }
}
resetBtn.addEventListener("click", resetAll)

function resetAll(){
    clearInterval(timer1)
    clearInterval(timer2)
    i=0;
    imgOne.style.left = i+"px";
    imgTwo.style.right = i+"px";
    imgThree.style.bottom = i+"px";
    para1.innerText= "<img src='icon1 gif' style='left " + imgOne.style.left +"'/>"
    para2.innerText= "<img src='icon2 gif' style='right " + imgTwo.style.right +"'/>"
    moveBtn.value = "go"
}