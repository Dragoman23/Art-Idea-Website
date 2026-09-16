let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random()*1000);
let currentNumber = number;

let mediums = ["pencil", "ballpoint", "fountain-pen", "brush-pen", "watercolor", "acrylic", "gouache", "clay", "digital", "colored", "oil-pastel", "mixed" ];

const pencil = document.createElement("pencil");
const ballpoint = document.createElement("ballpoint");
const fountain = document.createElement("fountain-pen");
const brush = document.createElement("brush-pen");
const watercolor = document.createElement("watercolor");
const acrylic = document.createElement("acrylic");
const gouache = document.createElement("gouache");
const clay = document.createElement("clay");
const digital = document.createElement("digital");
const colored = document.createElement("colored");
const pastel = document.createElement("oil-pastel");
const mixed = document.createElement("mixed");
const containers = document.querySelector("#result");

btn.onclick = function () {
    currentNumber = number
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);

    setTimeout(function () {
        let angle = (360 - (currentNumber%360)) % 360;
        let index = Math.floor(angle/30);

        if (mediums[index] === "pencil") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            pencil.innerHTML = `Pencil`;
            document.querySelector("#result").appendChild(pencil);
        }

        if (mediums[index] === "ballpoint") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            ballpoint.innerHTML = `Ballpoint Pen`;
            document.querySelector("#result").appendChild(ballpoint);
        }

        if (mediums[index] === "fountain") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            fountain.innerHTML = `Fountain Pen`;
            document.querySelector("#result").appendChild(fountain);
        }

        if (mediums[index] === "brush") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            brush.innerHTML = `Brush Pen`;
            document.querySelector("#result").appendChild(brush);
        }
      
        if (mediums[index] === "watercolor") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            watercolor.innerHTML = `Watercolor Paint`;
            document.querySelector("#result").appendChild(watercolor);
        }

        if (mediums[index] === "acrylic") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            acrylic.innerHTML = `Acrylic Paint`;
            document.querySelector("#result").appendChild(acrylic);
        }

        if (mediums[index] === "gouache") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            gouache.innerHTML = `Gouache Paint`;
            document.querySelector("#result").appendChild(gouache);
        }

        if (mediums[index] === "clay") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            clay.innerHTML = `Clay`;
            document.querySelector("#result").appendChild(clay);
        }

        if (mediums[index] === "digital") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            digital.innerHTML = `Digital Art`;
            document.querySelector("#result").appendChild(digital);
        }

        if (mediums[index] === "colored") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            colored.innerHTML = `Colored Pencils`;
            document.querySelector("#result").appendChild(colored);
        }

        if (mediums[index] === "pastel") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            pastel.innerHTML = `Oil Pastels`;
            document.querySelector("#result").appendChild(pastel);
        }

        if (mediums[index] === "mixed") {
            [pencil,ballpoint,fountain,brush,watercolor,acrylic,gouache,clay,digital,colored,pastel,mixed].forEach(el => {
                if (containers.contains(el)) {
                    containers.removeChild(el);
                }
            })
            mixed.innerHTML = `Pick two or more types of media to create your art with.`;
            document.querySelector("#result").appendChild(mixed);
        }
    }, 5000);
}
