for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick(){
    var inner = this.innerHTML;
    
    makeSound(inner);
    animation(inner);
}

document.addEventListener("keypress", function(pad){
    makeSound(pad.key);
    animation(pad.key);
})

function makeSound(key){
    switch(key){
        case "w" :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a" :
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s" :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d" :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j" :
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k" :
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l" :
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        default:
            console.log(inner);
    }
}

function animation(key){
    var anim = document.querySelector("." + key);
    anim.classList.add("pressed");
    setTimeout(function(){
        anim.classList.remove("pressed");
    }, 100)
}