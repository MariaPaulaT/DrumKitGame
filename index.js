
for(var i = 0; i<document.querySelector(".drum").lenght; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        alert("I got click");
    });
}