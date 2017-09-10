// block scope let
var topic = "JavaScript"

if (topic) {
  let topic = "React"
  console.log('block', topic)     // React
}

console.log('global', topic)      // JavaScript


// block scope let
var div, container = document.getElementById('container')
for (let i=0; i<5; i++) {
  div = document.createElement('div')
  div.onclick = function() {
      alert('This is box #: ' + i)
   }
  container.appendChild(div)
}


// default params and template strings
function logActivity(name="Shane McConkey", activity="skiing") {
  console.log( `${name} loves ${activity}` )
}


// Old
var lordify = function(firstName, land) {
  return `${firstName} of ${land}`
}

// New
var lordify = (firstName, land) => `${firstName} of ${land}`

console.log( lordify("Dale", "Maryland") )    // Dale of Maryland
console.log( lordify("Daryle", "Culpeper") )  // Daryle of Culpeper


// arrow functions do not block scope of this
var tahoe = {
  resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
  print: function(delay=1000) {

    setTimeout(() => {
      console.log(this.resorts.join(","))
    }, delay)

  }
}

tahoe.print() // Kirkwood, Squaw, Alpine, Heavenly, Northstar


// destructuring
var sandwich =  {
      bread: "dutch crunch",
      meat: "tuna",
      cheese: "swiss",
      toppings: ["lettuce", "tomato", "mustard"]
}

var {bread, meat} = sandwich

console.log(bread, meat) // dutch crunch tuna

var lordify = regularPerson => {
  console.log(`${regularPerson.firstname} of Canterbury`)
}

var regularPerson = {
  firstname: "Bill",
  lastname: "Wilson"
}

lordify(regularPerson)       // Bill of Canterbury

var lordify = ({firstname}) => {
  console.log(`${firstname} of Canterbury`)
}

lordify(regularPerson)      // Bill of Canterbury

var [firstResort] = ["Kirkwood", "Squaw", "Alpine"]

console.log(firstResort) // Kirkwood

var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"]

console.log(thirdResort) // Alpine

var name = "Tallac"
var elevation = 9738

var funHike = {name,elevation}

console.log(funHike) // {name: "Tallac", elevation: 9738}

var name = "Tallac"
var elevation = 9738
var print = function() {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`)
}

var funHike = {name,elevation,print}

funHike.print()     // Mt. Tallac is 9738 feet tall


// spread operator
var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]

console.log(tahoe.join(', '))  // Tallac, Ralston, Rose, Ward, Blackwood


// promises
const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', api)
  request.onload = () =>
       (request.status === 200) ?
        resolves(JSON.parse(request.response).results) :
        reject(Error(request.statusText))
  request.onerror = (err) => rejects(err)
  request.send()
})

getFakeMembers(5).then(
  members => console.log(members),
  err => console.error(
      new Error("cannot load members from randomuser.me"))
)


// classes
// old
function Vacation(destination, length) {
  this.destination = destination
  this.length = length
}

Vacation.prototype.print = function() {
    console.log(this.destination + " | " + this.length + " days")
}

var maui = new Vacation("Maui", 7);

maui.print(); // Maui | 7

// new
class Vacation {

  constructor(destination, length) {
    this.destination = destination
    this.length = length
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days.`)
  }

}

const trip = new Vacation("Santiago, Chile", 7);

console.log(trip.print()); // Chile will take 7 days.

class Expedition extends Vacation {

  constructor(destination, length, gear) {
   super(destination, length)
   this.gear = gear
  }

  print() {
    super.print()
    console.log(`Bring your ${this.gear.join(" and your ")}`)
  }
}

const trip = new Expedition("Mt. Whitney", 3,
                     ["sunglasses", "prayer flags", "camera"])

trip.print()
