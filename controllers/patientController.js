var patientController = function (options) {
    

   function getPatients() {
       patients = [{id: 1, Name: "Patient Zero"}, {id: 2, Name: "Patient One"}];

       return patients;
   }
    return {

        getPatients: getPatients

    };
}

module.exports = patientController;