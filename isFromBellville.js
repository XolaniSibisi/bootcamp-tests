var isFromBellville = function(registrationNumb){
    return registrationNumb.startsWith("CY");
  }
  console.log(isFromBellville("CY 123"));
  console.log(isFromBellville("CJ 123"));
  