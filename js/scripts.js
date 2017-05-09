//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

// user interface logic
$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');

  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
    var inputtedStreet = $(this).find("input.new-street").val();
    var inputtedCity = $(this).find("input.new-city").val();
    var inputtedState = $(this).find("input.new-state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
    $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
});
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");

  });
});


















































































// //Business Logic
//
// function Contact(first, last, address1, phone1) {
//   this.firstName = first;
//   this.lastName = last;
//   this.mainPhone = phone1;
//   this.address = [];
// }
//
// function Address(street, city, state) {
//   this.street = street;
//   this.city = city;
//   this.state = state;
// }
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
//
// // var fullName = function() {
// //   this.firstName + " " + this.lastName;
// // };
//
// Contact.prototype.allInfo = function() {
//   return this.firstName + " " + this.lastName + "<br>" + this.address + "<br>" + this.mainPhone;
// }
//
// // user interface logic
// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var inputtedHomeAddress1 = $("input#new-address").val();
//     var inputtedHomePhone1 = $("input#new-phone").val();
//
//     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedHomeAddress1, inputtedHomePhone1);
//
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.firstName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $(".address").text(newContact.address);
//       $(".phone").text(newContact.mainPhone);
//     });
//     // ADD ANOTHER ADDRESS
//     $(".add-address").click(function() {
//       $("#addresses").append('<div class="new-address">' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-street">Street</label>' +
//                                    '<input type="text" class="form-control new-street">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-city">City</label>' +
//                                    '<input type="text" class="form-control new-city">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-state">State</label>' +
//                                    '<input type="text" class="form-control new-state">' +
//                                  '</div>' +
//                                '</div>');
//     });
//
// console.log(newContact.address)
// //to Reset fields:
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-address").val("");
//     $("input#new-phone").val("");
//   });
// });
