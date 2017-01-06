var apiKey = require('./../.env').apiKey;

function Doctor() {}


var arrayOfDoctors = [];

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     debugger;
      $('#countDoctors').append("<li>" + response.data.length + "</li>");
      console.log(response.data.length);
      response.data.forEach(function(doctor) {
        doctor.practices.forEach(function(practice){
        console.log(practice.name);
        $('#showDoctors').append("<li>" + practice.name + "</li>");
        });
      });


      // arrayOfDoctors.push(data)
      // console.log(arrayOfDoctors)
      // console.log(arrayOfDoctors.data.profile.first_name)
    })
   .fail(function(error){
      console.log("fail");
    });

};



exports.doctorModule = Doctor;
