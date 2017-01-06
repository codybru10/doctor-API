var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#medical-issue-form').submit(function(event) {
    event.preventDefault();
    var doctorsObject = new Doctor();
    var issue = $('#issue').val();
    $('#condition').text("Your issue is " + issue + ".");
    doctorsObject.getDoctor(issue);
  });
});
