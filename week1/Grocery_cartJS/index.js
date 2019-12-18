var shopper = {
    firstName: "Jane",
    lastName: "Doe",
    shopperId: 101,
    active: true,
    groceryCart: ["Apples", "Bananas", "Milk", "Cereal"],
    fullName: function() {
        return "Hello, " + this.firstName + " " + this.lastName + " " + "Active" + " " + this.active + " " + "Grocery items" + " " + this.groceryCart["3"];
    }

};
console.log(shopper)
    // document.getElementById("demo").innerHTML = shopper.fullName(); // Remeber to uncomment when running HTML