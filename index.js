function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}
function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}


var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
