function regCheck(regNo, regLocat){
    return regNo.endsWith(regLocat);
  }
  console.log(regCheck('5566 L', 'M'));