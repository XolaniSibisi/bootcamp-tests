function isWeekday(day){
    var daysOfWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return day > daysOfWeeks[0] || day < daysOfWeeks[6];
  }
console.log(isWeekday('Saturday'));
console.log(isWeekday('Sunday'));
console.log(isWeekday('Monday'));
console.log(isWeekday('Tuesday'));
console.log(isWeekday('Wednesday'));
console.log(isWeekday('Thursday'));
console.log(isWeekday('Friday'));