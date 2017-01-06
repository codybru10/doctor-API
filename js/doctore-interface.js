var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var test_result = new Doctor();
  $('#medical-issue-form').submit(function(event) {
    event.preventDefault();
    var issue = $('#issue').val();
    test_result.getDoctors(issue);
  });
});
