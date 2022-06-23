class Patient {
    constructor(name, weight, height, fat, bmi) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.fat = fat;
        this.bmi = bmi;
    }
}

var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-add");

    var patient = pullFromForm(form);

    var errors = validatePatient(patient);

    if (errors.length > 0) {
        exibeMensagensDeError(errors);

        return;
    }

    addPatientOnChart(patient);

    form.reset();

    var messagesError = document.querySelector("#messages-error");
    messagesError.innerHTML = "";

});

function pullFromForm(form) {

    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calculaBmi(form.weight.value, form.height.value)
    }

    return patient;
}

function montaTr(patient) {
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(montaTd(patient.name, "info-name"));
    patientTr.appendChild(montaTd(patient.weight, "info-weight"));
    patientTr.appendChild(montaTd(patient.height, "info-height"));
    patientTr.appendChild(montaTd(patient.fat, "info-fat"));
    patientTr.appendChild(montaTd(patient.bmi, "info-bmi"));

    return patientTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validatePatient(patient) {

    var errors = [];

    if (patient.name.length == 0) {
        errors.push("Name cannot be blank");
    }

    if (patient.fat.length == 0) {
        errors.push("Fat percentage cannot be blank");
    }

    if (patient.weight.length == 0) {
        errors.push("Weight cannont be blank");
    }

    if (patient.height.length == 0) {
        errors.push("height cannot be blank");
    }

    if (!validateWeight(patient.weight)) {
        errors.push("Invalid Weight");
    }

    if (!validateheight(patient.height)) {
        errors.push("Invalid height");
    }

    return errors;
}

function exibeMensagensDeError(errors) {
    var ul = document.querySelector("#messages-error");
    ul.innerHTML = "";

    errors.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function addPatientOnChart(patient) {
    var patientTr = montaTr(patient);
    var chart = document.querySelector("#chart-patients");
    chart.appendChild(patientTr);
}
