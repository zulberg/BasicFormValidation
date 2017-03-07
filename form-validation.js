function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var strlen = userEntered.length;
  //Show message that there is an error with the username...
  if (strlen < 6) {
  document.getElementById("usernameError").innerHTML="Insufficient length.";
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  } else {
    //Turn username items green
  document.getElementById("usernameGroup").classlist.add("has-success");
  }
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
    //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  if (passEntered == "password") {
  document.getElementById("passwordError").innerHTML="You cannot choose that.  Try another password.";
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  } else {
      //Turn password items green
  document.getElementById("passwordGroup").classList.add("has-success");
  }
}
