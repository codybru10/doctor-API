var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#medical-issue-form').submit(function(event) {
    event.preventDefault();
    var doctorsObject = new Doctor();
    var issue = $('#issue').val();
    doctorsObject.getDoctor(issue);
    $('.unhide').show();
    $('#showDoctors').show();
    $('.carousel').carousel();
  });
});
