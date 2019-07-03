/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var regex = /[A-Z]/i;
    var arr = input.split(input.match(regex));
    result = arr[0];
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var regex = /[A-Z]/i;
    var arr = input.split(input.match(regex));
    result = input.match(regex) + arr[1];
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = "invalid unit";
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const LToGal = 0.264172052;
    const KgTolbs = 2.20462262;
    const kmToMi = 0.621371192;
    var units = ['km', 'mi', 'lbs', 'kg', 'gal', 'L'];
    var result;
    
    if(initNum == ""){
      initNum = 1;
    }else{
      if(!parseFloat(initNum)){
        result = 'invalid number';
      }else{
        initNum = initNum;
      }
    }
    
    
    switch(initUnit){
        case "gal":
          result = initNum * galToL;
          break;
        case "lbs":
          result = initNum * lbsToKg;
          break;
        case "mi":
          result = initNum * miToKm;
          break;
        case "L":
          result = initNum * LToGal;
          break;
        case "kg":
          result = initNum * KgTolbs;
          break;
        case "km":
          result = initNum * kmToMi;
          break;
    }
    
    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
