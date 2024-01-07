// var houseKeeper1 = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["Engineer", "Bathroom", "Lobby"]
// }

// function HouseKeeper1 (yearsOfExperience, name, cleaningRepertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.cleaningAlert = function () {
//         alert("Cleaning currently in progress");
//     }
// }

// var houseKeeper1 = new HouseKeeper1(12, "Jane", ["Engineer", "Bathroom", "Lobby"] );

// console.log(houseKeeper1)

// for sound, select base on loop, detect when user click
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        passingValue(this.innerHTML);
    })
}

// for keyword, select base on keypress, detect when user press keyboard
document.addEventListener("keydown", function(event) {
    passingValue(event.key);
}) 

// higher order function
function passingValue(key) {
    switch (key) {
        case "a":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;    
        case "h":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play(); 
            break;  
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play(); 
            break;  
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();   
                                                          
    }
}