function showMessage() {
    alert("🌱 Let's start taking care of your plants!");
}

function getTreatment() {
    let problem = document.getElementById("problem").value;
    let result = document.getElementById("result");

    if (problem === "yellow") {
        result.innerHTML = "💧 Check watering and sunlight. Avoid overwatering.";
    }
    else if (problem === "spots") {
        result.innerHTML = "🍂 Remove affected leaves and avoid excess moisture.";
    }
    else if (problem === "pests") {
        result.innerHTML = "🐛 Remove pests and use a suitable natural pesticide.";
    }
    else if (problem === "wilting") {
        result.innerHTML = "💧 Check soil moisture and give adequate water.";
    }
    else {
        result.innerHTML = "⚠️ Please select a plant problem.";
    }
}
