//Business Logic

function Contact(first, last, address1, phone1) {
  this.firstName = first;
  this.lastName = last;
  this.homeAddress = address1;
  this.mainPhone = phone1;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// var fullName = function() {
//   this.firstName + " " + this.lastName;
// };

Contact.prototype.allInfo = function() {
  return this.firstName + " " + this.lastName + "<br>" + this.homeAddress + "<br>" + this.mainPhone;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedHomeAddress1 = $("input#new-address").val();
    var inputtedHomePhone1 = $("input#new-phone").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedHomeAddress1, inputtedHomePhone1);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
     console.log(newContact.mainPhone)
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.homeAddress);
      $(".phone").text(newContact.mainPhone);
    });

//to Reset fields:
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-phone").val("");
  });
});
