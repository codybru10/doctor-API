var apiKey = require('./../.env').apiKey;

function Doctor() {}

Doctor.prototype.getDoctor = function(issue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
      $('#countDoctors').append("<td>" + issue + "</td>");
      $('#countDoctors').append("<td>" + response.data.length + "</td>");
      response.data.forEach(function(doctor) {
        console.log(doctor);
        var first = doctor.profile.first_name;
        var last = doctor.profile.last_name;
        var pic = doctor.profile.image_url;
          $('#showDoctors').append("<p>" + first + " " + last + " " + "<img src='" + pic +"' >" + "</p>");
      });
    })

   .fail(function(error){
      $('#countDoctors').text(error.responseJSON.message);
    });
  };


exports.doctorModule = Doctor;
