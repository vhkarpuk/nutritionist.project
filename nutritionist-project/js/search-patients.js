var searchButton = document.querySelector("#search-patient");

searchButton.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var errorAjax = document.querySelector("#error-ajax");

        if (xhr.status == 200) {
            errorAjax.classList.add("invisible");
            var receive = xhr.responseText;
            var patients = JSON.parse(receive);         

         patients.forEach(patient => {
            addPatientOnChart(new Patient(
                    patient.nome,
                    patient.peso,
                    patient.altura,
                    patient.gordura,
                    patient.imc
                  ));
              }); 

        } else {
            errorAjax.classList.remove("invisible");
        }
    });

    xhr.send();
});
           
 

