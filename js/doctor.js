var apiKey = require('./../.env').apiKey;

function Doctor() {

}

Doctor.prototype.getDoctor = function(issue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
      console.log(response);
      $('#countDoctors').append("<li>" + response.data.length + "</li>");
      // console.log(response.data)
      response.data.forEach(function(doctor) {
        var name = doctor.profile.first_name;
            $('#showDoctors').append("<li>" + name + "</li>");
            console.log(name);
    
      });
    })

   .fail(function(error){
      $('#countDoctors').text(error.responseJSON.message);
    });
  };



// Doctor.prototype.getDoctors = function(medicalIssue) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(response) {
//      debugger;
    //   $('#countDoctors').append("<li>" + response.data.length + "</li>");
    //   console.log(response.data.length);
    //   response.data.forEach(function(doctor) {
    //     doctor.practices.forEach(function(practice){
    //       practice.insurance_uids.forEach(function(id){
    //         $('#showDoctors').append("<li>" + id + "</li>");
    //       });
    //     });
    //   });
    // })
//    .fail(function(error){
//       console.log("fail");
//     });
//
// };



exports.doctorModule = Doctor;
