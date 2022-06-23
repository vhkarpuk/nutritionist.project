// Manipulate HTML via JS
var changeTitle = document.querySelector(".title");
changeTitle.textContent = "Nutri Health";

// Calculate BMI + Validatetions
var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {

    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-weight");
    var weight = tdWeight.textContent;

    var tdheight = patient.querySelector(".info-height");
    var height = tdheight.textContent;

    var tdBmi = patient.querySelector(".info-bmi");

    var weightEhValido = validateWeight(weight);
    var heightEhValidate = validateheight(height);

    if (!weightEhValido) {
        console.log("Weight inválido!");
        weightEhValido = false;
        tdBmi.textContent = "Weight inválido";
        patient.classList.add("patient-invalid");
    }

    if (!heightEhValidate) {
        console.log("height inválida!");
        heightEhValidate = false;
        tdBmi.textContent = "height inválida";
        patient.classList.add("patient-invalid");
    }

    if (weightEhValido && heightEhValidate) {
        var bmi = calculaBmi(weight, height);
        tdBmi.textContent = bmi;
    }
}

function calculaBmi(weight, height) {
    var bmi = 0;
    bmi = weight / (height * height);

    return bmi.toFixed(2);
}

function validateWeight(weight) {

    if (weight >= 0 && weight <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validateheight(height) {

    if (height >= 0 && height <= 3.00) {
        return true;
    } else {
        return false;
    }
}
