function openThankYou(socialMedia) {
  // Using confirm function for a pop-up
  var confirmJoin = confirm("Join our " + socialMedia + " page for the latest updates? \nClick 'OK' to join, or 'Cancel' to stay on this page.");
  if (confirmJoin) {
    alert("Thank you for joining our " + socialMedia + " page!");
  } else {
    alert("No worries! We're still here for you.");
  }
}