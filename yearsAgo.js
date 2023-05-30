function yearsAgo(year){
    const date = new Date();
    var dt = date.getFullYear() - year;
    
    return dt;
  }
console.log(yearsAgo(1976));
console.log(yearsAgo(2000));