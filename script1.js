let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random()*1000);
let currentNumber = number;

let colors = ["red", "orange", "yellow", "green", "blue", "purple", "violet", "pink"];

// The idea for this part, to add to the bottom what you spun I got from a past project called Zelda Font Website which I submitted to a different ysws//
const red = document.createElement("red");
const orange = document.createElement("orange");
const yellow = document.createElement("yellow");
const green = document.createElement("green");
const blue = document.createElement("blue");
const purple = document.createElement("purple");
const violet = document.createElement("violet");
const pink = document.createElement("pink");
const containers = document.querySelector("#result");

btn.onclick = function () {
    currentNumber = number
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);

    setTimeout(function () {
        let angle = (360 - (currentNumber%360)) % 360;
        let index = Math.floor(angle/45);

        if (colors[index] === "red") {
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            red.innerHTML = `Sketch the face of a nonhuman species of fantasy race`;
            document.querySelector("#result").appendChild(red);
        }

        if (colors[index] === "orange") {
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            orange.innerHTML = `Create something with some form of cyberpunk elements`;
            document.querySelector("#result").appendChild(orange);
        }

        if (colors[index] === "yellow") {
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            yellow.innerHTML = `Create something with mythological elements, that being gods or other mythtical creatures/objects`;
            document.querySelector("#result").appendChild(yellow);
        }

        if (colors[index] === "green") {
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            green.innerHTML = `Create a fantasy setting with buildings, castles, and fantastical background characters or creatures`;
            document.querySelector("#result").appendChild(green);
        }

        if (colors[index] === "blue") {
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            blue.innerHTML = `Create something that reflects society(past, present, or future), depicts rulers, records historical events, or social/politcical commentary`;
            document.querySelector("#result").appendChild(blue);
        }

        if (colors[index] === "purple") {
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            purple.innerHTML = `Draw something you see in your daily life or the natural world like landscapes, seascapes, animal studies, and flora. Don't be afraid to add your own creative influence`;
            document.querySelector("#result").appendChild(purple);
        }

        if (colors[index] === "violet") {
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            violet.innerHTML = `Draw a self potrait twice. The first time draw it exactly the way to look. The second time draw your face with a few fantasy or creative flourishes`;
            document.querySelector("#result").appendChild(violet);
        }

        if (colors[index] === "pink"){
            [red,orange,yellow,green,blue,purple,violet,pink].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            pink.innerHTML = `Either draw something 3D with 1,2, or 3 vanishing point or draw something with a single line. For the single line, the only rule is that your 'pencil' CANNOT be lifted off of the paper`;
            document.querySelector("#result").appendChild(pink);
        }

    }, 5000);
}