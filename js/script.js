/*eslint-env browser*/
var $ = function(id) {
  "use strict";
  return window.document.getElementById(id);
};

/*************     PART 1 ********************/
function checkOptions(val) {
  "use strict";
  if (val === "Other") {
    $("address").style.display = "block";
  } else {
    $("address").style.display = "none";
  }
}

var customerName = function validName() {
  "use strict";
  var regex = /^[a-z A-Z]{2,30}$/;

  if (regex.test($("name").value) && $("name").value !== " ") {
    return ($("name").style.border = "2px solid green");
  } else {
    return ($("name").style.border = "2px solid red");
  }
};
var address = function validAddress(val) {
  "use strict";
  var result;
  if ((val !== " ") && ($("addressType").selectedIndex) !== 0) {
    result = ($("addressType").style.border = "2px solid green");
    return result;
  } else {
    result = ($("addressType").style.border = "2px solid red");
    return result;
  }
};
var street = function validStreet() {
  "use strict";
  var regex = /^[a-zA-Z0-9\s,'-]*$/,
    result;
  if (regex.test($("streetAddress").value) && $("streetAddress").value !== "") {
    result = ($("streetAddress").style.border = "2px solid green");
    return result;
  } else {
    result = ($("streetAddress").style.border = "2px solid red");
    return result;
  }
};
var apartment = function validApartment() {
  "use strict";
  var regex = /^[a-zA-Z0-9\s,'-]*$/,
    result;
  if (regex.test($("apartmentNumber").value) && $("apartmentNumber").value !== "") {
    result = ($("apartmentNumber").style.border = "2px solid green");
    return result;
  } else {
    result = ($("apartmentNumber").style.border = "1px solid #bbb");
    return result;
  }
};
var city = function validCity() {
  "use strict";
  var cityRegex = /^[a-z A-Z]{2,50}$/,
    result;

  if (cityRegex.test($("city").value) && $("city").value !== " ") {
    result = ($("city").style.border = "2px solid green");
    return result;
  } else {
    result = ($("city").style.border = "2px solid red");
    return result;
  }
};
var state = function validState() {
  "use strict";
  var stateRegex = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i,
    result;

  if (stateRegex.test($("state").value) && $("state").value !== "") {
    result = ($("state").style.border = "2px solid green");
    return result;
  } else {
    result = ($("state").style.border = "2px solid red");
    return result;
  }
};
var zip = function validZip() {
  "use strict";
  var zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    zipResult;
  if (zipRegex.test($("zipCode").value) && $("zipCode").value !== "") {
    zipResult = ($("zipCode").style.border = "2px solid green");
    return zipResult;
  } else {
    zipResult = ($("zipCode").style.border = "2px solid red");
    return zipResult;
  }
};
var phone = function validPhone() {
  "use strict";
  var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    phoneResult;
  if (phoneRegex.test($("phoneNumber").value) && $("phoneNumber").value !== "") {
    phoneResult = ($("phoneNumber").style.border = "2px solid green");
    return phoneResult;
  } else {
    phoneResult = ($("phoneNumber").style.border = "2px solid red");
    return phoneResult;
  }
};
var email = function validEmail() {
  "use strict";
  var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
    emailResult;
  if (emailRegex.test($("email").value) && $("email").value !== "") {
    emailResult = ($("email").style.border = "2px solid green");
    return emailResult;
  } else {
    emailResult = ($("email").style.border = "2px solid red");
    return emailResult;
  }
};

/*************     PART 2 ********************/
function totalValue() {
  "use strict";
  var total = 0,
    crustCost, cheeseCost, sauceCost;
  crustCost = parseFloat($("sizeCost").value);
  cheeseCost = parseFloat($("cheeseOptions").value);
  sauceCost = parseFloat($("sauceOptions").value);

  if ($("handTossed").checked || $("thinCrust").checked || $("newYorkStyle").checked || $("glutenFree").checked) {
    total = total + cheeseCost;
    total = total + sauceCost;
    total = total + crustCost;

    if ($("peppers").checked) {
      total = total + 0.99;
    }
    if ($("olives").checked) {
      total = total + 0.99;
    }
    if ($("jalapenos").checked) {
      total = total + 0.99;
    }
    if ($("mushrooms").checked) {
      total = total + 0.99;
    }
    if ($("pineapple").checked) {
      total = total + 0.99;
    }
    if ($("onion").checked) {
      total = total + 0.99;
    }
    if ($("pepperoni").checked) {
      total = total + 0.99;
    }
    if ($("sausage").checked) {
      total = total + 0.99;
    }
    if ($("ham").checked) {
      total = total + 0.99;
    }
    if ($("bacon").checked) {
      total = total + 0.99;
    }
    if ($("salami").checked) {
      total = total + 0.99;
    }
  } else {

    $("peppers").checked = false;
    $("olives").checked = false;
    $("jalapenos").checked = false;
    $("mushrooms").checked = false;
    $("pineapple").checked = false;
    $("onion").checked = false;
    $("pepperoni").checked = false;
    $("sausage").checked = false;
    $("ham").checked = false;
    $("bacon").checked = false;
    $("salami").checked = false;
    $("cheeseOptions").selectedIndex = 0;
    $("sauceOptions").selectedIndex = 0;
    window.alert("please selecte pizza crust first");
  }

  $("totalPrice").value = total.toPrecision(4);

}

var nameB = function validNameD() {
  "use strict";
  var regex = /^[a-z A-Z]{2,30}$/,
    result;

  if (regex.test($("name1").value) && $("name1").value !== "") {
    result = ($("name1").style.border = "2px solid green");
    return result;
  } else {
    result = ($("name1").style.border = "2px solid red");
    return result;
  }
};

var streetB = function validStreet() {
  "use strict";
  var result;
  if ($("streetAddress1").value !== "") {
    result = ($("streetAddress1").style.border = "2px solid green");
    return result;
  } else {
    result = ($("streetAddress1").style.border = "2px solid red");
    return result;
  }
};

var apartmentB = function validApartment() {
  "use strict";
  var result;
  if ($("apartmentNumber1").value !== "") {
    result = ($("apartmentNumber1").style.border = "2px solid green");
    return result;
  } else {
    result = ($("apartmentNumber1").style.border = "2px solid red");
    return result;
  }
};
var cityB = function validCity() {
  "use strict";
  var cityRegex = /^[a-z A-Z]{2,50}$/,
    result;

  if (cityRegex.test($("city1").value) && $("city1").value !== " ") {
    result = ($("city1").style.border = "2px solid green");
    return result;
  } else {
    result = ($("city1").style.border = "2px solid red");
    return result;
  }
};

var stateB = function validState() {
  "use strict";
  var stateRegex = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i,
    result;

  if (stateRegex.test($("state1").value) && $("state1").value !== "") {
    result = ($("state1").style.border = "2px solid green");
    return result;
  } else {
    result = ($("state1").style.border = "2px solid red");
    return result;
  }
};

var zipB = function validZip() {
  "use strict";
  var zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    zipResult;
  if (zipRegex.test($("zipCode1").value) && $("zipCode1").value !== "") {
    zipResult = ($("zipCode1").style.border = "2px solid green");
    return zipResult;
  } else {
    zipResult = ($("zipCode1").style.border = "2px solid red");
    return zipResult;
  }
};

function checkBox() {
  "use strict";
  $("name1").value = $("name").value;
  $("name1").style.border = "2px solid green";
  $("name1").readOnly = true;
  $("name1error").innerHTML = "";
  $("streetAddress1").value = $("streetAddress").value;
  $("streetAddress1").style.border = "2px solid green";
  $("streetAddress1").readOnly = true;
  $("street1error").innerHTML = "";
  $("apartmentNumber1").value = $("apartmentNumber").value;
  $("apartmentNumber1").style.border = "2px solid green";
  $("apartmentNumber1").readOnly = true;
  $("apartment1error").innerHTML = "";
  $("city1").value = $("city").value;
  $("city1").style.border = "2px solid green";
  $("city1").readOnly = true;
  $("city1error").innerHTML = "";
  $("state1").value = $("state").value;
  $("state1").style.border = "2px solid green";
  $("state1").readOnly = true;
  $("state1error").innerHTML = "";
  $("zipCode1").value = $("zipCode").value;
  $("zipCode1").style.border = "2px solid green";
  $("zipCode1").readOnly = true;
  $("zip1error").innerHTML = "";
}

function checkBoxUncheck() {
  "use strict";
  $("name1").value = "";
  $("name1").style.border = "1px solid #bbb";
  $("name1").readOnly = false;
  $("streetAddress1").value = "";
  $("streetAddress1").style.border = "1px solid #bbb";
  $("streetAddress1").readOnly = false;
  $("apartmentNumber1").value = "";
  $("apartmentNumber1").style.border = "1px solid #bbb";
  $("apartmentNumber1").readOnly = false;
  $("city1").value = "";
  $("city1").style.border = "1px solid #bbb";
  $("city1").readOnly = false;
  $("state1").value = "";
  $("state1").style.border = "1px solid #bbb";
  $("state1").readOnly = false;
  $("zipCode1").value = "";
  $("zipCode1").style.border = "1px solid #bbb";
  $("zipCode1").readOnly = false;
}

function ReadOnlyForm(formId, isReadOnly) {
  "use strict";
  var f = document.forms[formId];
  var i, fLen;
  for (i = 0, fLen = f.length; i < fLen; i += 1) {
    f.elements[i].readOnly = isReadOnly;
    f.elements[i].disabled = isReadOnly;
  }
}

/*************    BILLING VALIDATION   ********************/
var cardHolderName = function validNameD() {
  "use strict";
  var regex = /^[a-z A-Z]{2,30}$/,
    result;

  if (regex.test($("cardHolderName").value) && $("cardHolderName").value !== "") {
    result = ($("cardHolderName").style.border = "2px solid green");
    return result;
  } else {
    result = ($("cardHolderName").style.border = "2px solid red");
    return result;
  }
};
var cvcCode = function validCvc() {
  "use strict";
  var regex = /^[0-9]{3}$/,
    result;

  if (regex.test($("cvcCode").value) && $("cvcCode").value !== "") {
    result = ($("cvcCode").style.border = "2px solid green");
    return result;
  } else {
    result = ($("cvcCode").style.border = "2px solid red");
    return result;
  }
};
var exMonth = function validMoth() {
  "use strict";
  if ($("month").selectedIndex === 0) {
    window.alert("Please select the month and year");
    return false;
  }
};
var exYear = function vaildYear() {
  "use strict";
  if ($("year").selectedIndex === 0) {
    window.alert("Please select the year");
    return false;
  }

};

function validCreditCard(value) {
  "use strict";
  if (/[^0-9-\s]+/.test(value)) return false;
  var nCheck = 0,
    nDigit = 0,
    bEven = false,
    n;
  value = value.replace(/\D/g, "");

  for (n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);
    if (bEven) {
      if ((nDigit *= 2) > 9) {
        nDigit -= 9;
      }
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

window.addEventListener("load", function() {
  "use strict";
  $("name").addEventListener("input", function() {
    customerName();
    if ($("name").style.border === "2px solid red") {
      $("nameerror").style.color = "red";
    } else {
      $("nameerror").style.color = "green";
    }
  });


  $("addressType").addEventListener("input", function() {
    address();
    if ($("addressType").style.border === "2px solid red") {
      $("addresserror").style.color = "red";
    } else {
      $("addresserror").style.color = "green";
    }

  });
  $("streetAddress").addEventListener("input", function() {
    street();
    if ($("streetAddress").style.border === "2px solid red") {
      $("streeterror").style.color = "red";
    } else {
      $("streeterror").style.color = "green";
    }

  });
  $("apartmentNumber").addEventListener("input", function() {
    apartment();
    if ($("apartmentNumber").style.border === "2px solid green") {
      $("apartmenterror").style.color = "green";
    } else {
      $("apartmenterror").innerHTML = "Optional";
    }
  });
  $("city").addEventListener("input", function() {
    city();
    if ($("city").style.border === "2px solid red") {
      $("cityerror").style.color = "red";
    } else {
      $("cityerror").style.color = "green";
    }
  });
  $("state").addEventListener("input", function() {
    state();
    if ($("state").style.border === "2px solid red") {
      $("stateerror").style.color = "red";
    } else {
      $("stateerror").style.color = "green";
    }
  });
  $("zipCode").addEventListener("input", function() {
    zip();
    if ($("zipCode").style.border === "2px solid red") {
      $("ziperror").style.color = "red";
    } else {
      $("ziperror").style.color = "green";
    }

  });
  $("phoneNumber").addEventListener("input", function() {
    phone();
    if ($("phoneNumber").style.border === "2px solid red") {
      $("phonenumbererror").style.color = "red";
    } else {
      $("phonenumbererror").style.color = "green";
    }

  });
  $("email").addEventListener("input", function() {
    email();
    if ($("email").style.border === "2px solid red") {
      $("emailerror").style.color = "red";
    } else {
      $("emailerror").style.color = "green";
    }
  });


/*************     Pizza Crust Object  ********************/
  var crust = {
    handTossed: [{
        size: "Small",
        price: "$9.99"
      },
      {
        size: "Medium",
        price: "$12.99"
      },
      {
        size: "Large",
        price: "$14.99"
      }
    ],
    thinCrust: [{
        size: "Medium",
        price: "$11.99"
      },
      {
        size: "Large",
        price: "$13.99"
      }
    ],
    newYorkStyle: [{
        size: "Large",
        price: "$16.99"
      },
      {
        size: "Extra Large",
        price: "$19.99"
      }
    ],
    glutenFree: [{
      size: "Small",
      price: "$10.99"
    }]
  };

  var optdoughlist = document.getElementsByName('optdough');
  var optdoughItems = [].slice.call(optdoughlist);
  optdoughItems.forEach(function(item) {
    item.addEventListener('change', function() {
      var selectedDough, i, el;
      selectedDough = crust[item.id];
      $('sizeCost').innerHTML = null;
      for (i = 0; i < selectedDough.length; i += 1) {
        el = document.createElement("option");
        el.textContent = selectedDough[i].size + " (" + selectedDough[i].price + ")";
        el.value = selectedDough[i].price.substr(1);
        $('sizeCost').appendChild(el);
      }
      totalValue();
    });
  });

/***************        ADD EVENT LISTENERS FOR PIZZA OPTIONS          ****************/
  $("sizeCost").addEventListener("change", totalValue);
  $("cheeseOptions").addEventListener("change", totalValue);
  $("sauceOptions").addEventListener("change", totalValue);
  $("toppings").addEventListener("change", totalValue);


  $("confirmation").addEventListener("click", function(e) {
    e.preventDefault();
    if (($("name").value !== "") && ($("addressType").value !== "") && ($("streetAddress").value !== "") && ($("city").value !== "") && ($("state").value !== "") && ($("zipCode").value !== "") && ($("phoneNumber").value !== "") && ($("email").value !== "")) {

      if (($("name").style.border !== "2px solid red") && ($("addressType").style.border !== "2px solid red") && ($("streetAddress").style.border !== "2px solid red") && ($("city").style.border !== "2px solid red") && ($("state").style.border !== "2px solid red") && ($("zipCode").style.border !== "2px solid red") && ($("phoneNumber").style.border !== "2px solid red") && ($("email").style.border !== "2px solid red")) {

        if ($("handTossed").checked || $("thinCrust").checked || $("newYorkStyle").checked || $("glutenFree").checked) {

          if (($("totalPrice").value === "0") || ($("totalPrice").value === "0.000")) {
            e.preventDefault();
            window.alert("Need to select pizza size");
          } else {
            e.preventDefault();
            if (window.confirm("PIZZA COST: $" + $("totalPrice").value + "\n Is this correct?")) {
              e.preventDefault();
              window.alert("Enter billing information");
              $("billing").style.display = "block";
              ReadOnlyForm("deliveryLocation", true);
              ReadOnlyForm("bulidingPizza", true);

            } else {
              e.preventDefault();
            }
          }
        } else {
          e.preventDefault();
          window.alert("Need to fill pizza order");
        }
      } else {
        e.preventDefault();
        window.alert("Need to fill customer information");
      }
    } else {
      e.preventDefault();
      window.alert("Need to fill customer information");
    }
  });


  $("name1").addEventListener("input", function() {
    nameB();
    if ($("name1").style.border === "2px solid red") {
      $("name1error").style.color = "red";
    } else {
      $("name1error").style.color = "green";
    }
  });

  $("streetAddress1").addEventListener("input", function() {
    streetB();
    if ($("streetAddress1").style.border === "2px solid red") {
      $("street1error").style.color = "red";
    } else {
      $("street1error").style.color = "green";
    }
  });
  $("apartmentNumber1").addEventListener("input", function() {
    apartmentB();
    if ($("apartmentNumber1").style.border === "2px solid green") {
      $("apartment1error").style.color = "green";
    } else {
      $("apartment1error").innerHTML = "Optional";
    }
  });
  $("city1").addEventListener("input", function() {
    cityB();
    if ($("city1").style.border === "2px solid red") {
      $("city1error").style.color = "red";
    } else {
      $("city1error").style.color = "green";
    }
  });
  $("state1").addEventListener("input", function() {
    stateB();
    if ($("state1").style.border === "2px solid red") {
      $("state1error").style.color = "red";
    } else {
      $("state1error").style.color = "green";
    }
  });
  $("zipCode1").addEventListener("input", function() {
    zipB();
    if ($("zipCode1").style.border === "2px solid red") {
      $("zip1error").style.color = "red";
    } else {
      $("zip1error").style.color = "green";
    }
  });
  $("bcheckBox").addEventListener("click", function() {
    if ($("bcheckBox").checked) {
      checkBox();
    } else {
      checkBoxUncheck();
    }
  });


  $("cardHolderName").addEventListener("input", function() {
    cardHolderName();
    if ($("cardHolderName").style.border === "2px solid red") {
      $("cardHolderNameError").style.color = "red";
    } else {
      $("cardHolderNameError").style.color = "green";
    }
  });
  $("cvcCode").addEventListener("input", function() {
    cvcCode();
    if ($("cvcCode").style.border === "2px solid red") {
      $("cvcCodeError").style.color = "red";
    } else {
      $("cvcCodeError").style.color = "green";
    }
  });
  $("month").addEventListener("change", exMonth);
  $("year").addEventListener("change", function() {
    "use strict";
    exYear();
    var d = new Date();
    var currentYear = d.getFullYear();
    var month = new Date().getMonth() + 1;
    var year = parseInt($("year").options[$("year").selectedIndex].value, 10);
    if (($("month").selectedIndex < month && currentYear === year) || (year < currentYear)) {
      window.alert("please enter valid date");
      $("month").selectedIndex = 0;
      $("year").selectedIndex = 0;
    }
  });

  $("cardNumber").addEventListener("blur", function() {
    "use strict";
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var masterRegEx = /^(?:5[1-5][0-9]{14})$/;
    var americanRegEx = /^(?:3[47][0-9]{13})$/;

    if (visaRegEx.test($("cardNumber").value)) {

      if (!validCreditCard($("cardNumber").value)) {
        $("cardNumber").style.border = "2px solid red";
      } else {
        $("cardNumberError").style.color = "green";
        $("cardNumber").style.border = "2px solid green";
        return true;
      }

    } else if (masterRegEx.test($("cardNumber").value)) {

      if (!validCreditCard($("cardNumber").value)) {
        $("cardNumber").style.border = "2px solid red";
      } else {
        $("cardNumberError").style.color = "green";
        $("cardNumber").style.border = "2px solid green";
        return true;
      }

    } else if (americanRegEx.test($("cardNumber").value)) {

      if (!validCreditCard($("cardNumber").value)) {
        $("cardNumber").style.border = "2px solid red";
      } else {
        $("cardNumberError").style.color = "green";
        $("cardNumber").style.border = "2px solid green";
        return true;
      }

    } else {
      $("cardNumberError").style.color = "red";
      $("cardNumber").style.border = "2px solid red";

    }
  });
  $("confirmPurchase").addEventListener("click", function(eve) {
    if (($("name1").value !== "") && ($("streetAddress1").value !== "") && ($("city1").value !== "") && ($("state1").value !== "") && ($("zipCode1").value !== "")) {

      if (($("name1").style.border !== "2px solid red") && ($("streetAddress1").style.border !== "2px solid red") && ($("city1").style.border !== "2px solid red") && ($("state1").style.border !== "2px solid red") && ($("zipCode1").style.border !== "2px solid red")) {

        if ($("cardHolderName").style.border !== "2px solid red" && $("cvcCode").style.border !== "2px solid red" && $("cardNumber").style.border !== "2px solid red" && $("month").selectedIndex !== 0 &&
          $("year").selectedIndex !== 0) {

          if (window.confirm("Press OK to confirm your order")) {

            window.alert("You ordered has been placed and will be delivered within 45 minutes.");

          } else {
            eve.preventDefault();
          }

        } else {
          eve.preventDefault();
          window.alert("Payment Information incomplete");
        }
      } else {
        eve.preventDefault();
        window.alert("Billing information incomplete");
      }
    }

  });

});
