//(function(){

  //Traveler object
  function Traveler(name, food, isHealthy) {
    this.name = name;
    this.food = food;
    this.isHealthy = isHealthy;

    this.getFood = function() {
      return this.food;
    }
  }

  //traveler name is input;
  //food is random assignment from 20 to 100;
  //travelers begin healthy
  function makeTraveler(travName) {
    let name = travName;
    let food = Math.floor(Math.random() * (200-20)) + 20;
    let isHealthy = true;
    return new Traveler(name, food, isHealthy);
  }

  //Wagon object
  function Wagon(capacity) {
    this.capacity = capacity;
    this.passList = [];
  }

  function makeWagon(wagonCapacity) {
    return new Wagon(wagonCapacity);
  }

  //hunt
  //prey is the outcome of the hunt - random zero or 1; 1 is successful
  //zero does nothing; 1 adds 100 to existing food
  function hunt(traveler){
    let prey = Math.floor(Math.random() * 10) + 1;
    console.log("hunt " + prey);
    if (prey % 2==0) {
      traveler.food = traveler.getFood() + 100;
      console.log("hunt new food: " + traveler.getFood());
    }
  }


  //eat subtracts 20 from food
  function eat(traveler) {
    traveler.food = traveler.getFood() - 20;
    if (traveler.getFood() < 20) {
      traveler.isHealthy = false;
    }
    console.log("eaten; new food = " + traveler.getFood());
    console.log(traveler.name + " is healthy: " + traveler.isHealthy);
  }


function join(wagon, traveler) {

  if (wagon.passList.length < wagon.capacity) {
    console.log("yes, " + traveler.name + " may join the wagon");
    wagon.passList.push(traveler);
  }else {
    console.log("sorry, this wagon is full. " + traveler.name + " cannot join this wagon.");
  }
}

  //Return true if there is at least one unhealthy person in the wagon. Return false if not.
  //need to know how to check passenger list for isHealthy
  function quarantine(wagon) {
    for (let i = 0; i < wagon.passList.length; i++) {
      //console.log(wagon.passList[i].isHealthy);
      if (wagon.passList[i].isHealthy == false) {
        console.log("Wagon is quarantined")
        return true;
      }
    }
      console.log("Wagon is not quarantined");
      return false;

  }


  // Return the total amount of food among all occupants of the wagon.
  // need to know how to check passenger list for food
  function food(wagon) {
    let totalFood = 0;
    for (let i = 0; i < wagon.passList.length; i++) {
      totalFood = totalFood + wagon.passList[i].food;
      console.log("totalFood is " + totalFood);
    }
    return totalFood;
  }


let wagon = makeWagon(5);
// Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = makeTraveler('Henrietta');
console.log(traveler.getFood());
// Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = makeTraveler('Juan');
console.log(traveler2.getFood());
hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food
//})();
