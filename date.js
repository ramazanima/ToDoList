var getdate = function() {
    let today = new Date();
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
  };
  
  var getday = function() {
    let today = new Date();
    let options = {
      weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
  };
  
  module.exports.getdate = getdate;
  module.exports.getday = getday;
  
  