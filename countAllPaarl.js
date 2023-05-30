function countAllPaarl(regNumbers){
    var regNumbersList = regNumbers.split(",");
    var paarlRegNumCount = 0;
    for(let i=0; i<regNumbersList.length; i++){
      var paarlRegNum = regNumbersList[i].trim();
      if(paarlRegNum.startsWith("CJ")){
         paarlRegNumCount += 1;
         }
    }
         return paarlRegNumCount;
  }
  console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
  console.log(countAllPaarl('CJ 345 123, CK 345, CJ 123'));