// let lightbulb1 = document.querySelector("#lightbulb1");
// let lightbulb2 = document.querySelector("#lightbulb2");
// let lightbulb3 = document.querySelector("#lightbulb3");

let subtitle = document.querySelector(".subtitle");
let count = 0;

const bulbs = document.querySelectorAll(".item");
for (const bulb of bulbs) {
    bulb.addEventListener("click", function () {
        count++;
        if (count === 1) {
            subtitle.innerHTML = "You've clicked the lights " + count + " time";
        } else {
            subtitle.innerHTML =
                "You've clicked the lights " + count + " times";
        }
        this.classList.toggle("active");
    });
}

bulbs[0].addEventListener("click", function () {
    count++;
    if (count === 1) {
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
    } else {
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
    }
    bulbs[1].classList.toggle("active");
    bulbs[5].classList.toggle("active");
});

// lightbulb1.addEventListener("click", function () {
//     count++;
//     subtitle.innerHTML = "You've clicked the lights " + count + " times";
//     lightbulb1.classList.toggle("active");
// });

// lightbulb2.addEventListener("click", function () {
//     count++;
//     subtitle.innerHTML = "You've clicked the lights " + count + " times";
//     lightbulb2.classList.toggle("active");
// });

// lightbulb3.addEventListener("click", function () {
//     count++;
//     subtitle.innerHTML = "You've clicked the lights " + count + " times";
//     lightbulb3.classList.toggle("active");
// });
