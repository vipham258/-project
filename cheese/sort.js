/**
 *  @fileOverview hold 2 function sortByID and sortByProvCode to sort cheese data object
 *  @author       Vi Thi Phuong Pham
 */

function sortByID(cheeseRecords) {
  let byCheeseId = cheeseRecords.slice(0);
  byCheeseId.sort(function(a, b) {
    return a.CheeseId - b.CheeseId;
  });
  console.log("Program by: Vi Thi Phuong Pham - 040886894");
  console.log("---------------Sorting by CheeseId:----------------");
  console.log(byCheeseId);
  return byCheeseId;
}
//Sort cheese objects by Manufacturer provcode
function sortByProvCode(cheeseRecords) {
  let byName = cheeseRecords.slice(0);
  byName.sort(function(a, b) {
    let x = a.ManufacturerProvCode;
    let y = b.ManufacturerProvCode;
    return x.localeCompare(y);
  });
  console.log("Program by: Vi Thi Phuong Pham - 040886894");
  console.log("---------------Sorting by Province code:----------------");
  console.log(byName);
  return byName;
}

//export the 2 functions
module.exports = {
  sortByID,
  sortByProvCode
};
