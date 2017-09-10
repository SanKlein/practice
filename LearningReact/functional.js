const log = message => console.log(message)

const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
}

obj.log(obj.message)


var createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
}

const scream = createScream(message => console.log(message))

scream('functions can be returned from other functions')
scream('createScream returns a function')
scream('scream invokes that returned function')


// immutable
var rateColor = function(color, rating) {
   return Object.assign({}, color, {rating:rating})
}

console.log(rateColor(color_lawn, 5).rating)      // 5
console.log(color_lawn.rating)                    // 4

const rateColor = (color, rating) => ({ ...color, rating })

const addColor = (title, list) => [...list, {title}]

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}

const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true
})

console.log( selfEducate(frederick) )
console.log( frederick )

// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}

const Header = (props) => <h1>{props.title}</h1>


const wSchools = schools.filter(school => school[0] === "W")

const cutSchool = (cut, list) => list.filter(school => school !== cut)

const highSchools = schools.map(school => `${school} High School`)

const highSchools = schools.map(school => ({ name: school }))

const schools = {
  "Yorktown": 10,
  "Washington & Lee": 2,
  "Wakefield": 5
}

const schoolArray = Object.keys(schools).map(key => (
  {
    name: key,
    wins: schools[key]
  }
))


const ages = [21,18,42,40,64,63,34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
      return age
  } else {
      return max
  }
}, 0)

console.log('maxAge', maxAge);

const max = ages.reduce(
    (max, value) => (value > max) ? value : max,
    0
)

const colors = [
    {
        id: '-xekare',
        title: "rad red",
        rating: 3
    },
    {
        id: '-jbwsof',
        title: "big blue",
        rating: 2
    },
    {
        id: '-prigbj',
        title: "grizzly grey",
        rating: 5
    },
    {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1
    }
]

const hashColors = colors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = {title, rating}
        return hash
    },
    {}
)

console.log(hashColors);


// higher-order functions
const invokeIf = (condition, fnTrue, fnFalse) =>
    (condition) ? fnTrue() : fnFalse()

const showWelcome = () =>
    console.log("Welcome!!!")

const showUnauthorized = () =>
    console.log("Unauthorized!!!")

invokeIf(true, showWelcome, showUnauthorized)    // "Welcome"
invokeIf(false, showWelcome, showUnauthorized)   // "Unauthorized"

const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`)

const log = userLogs("grandpa23")

log("attempted to load 20 fake members")
getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`),
    error => log("encountered an error loading members")
)


// recursion
const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value-1, fn) : value
}

countdown(10, value => console.log(value));

const countdown = (value, fn, delay=1000) => {
    fn(value)
    return (value > 0) ?
        setTimeout(() => countdown(value-1, fn), delay) :
        value
}

const log = value => console.log(value)
countdown(10, log);


// composition
const template = "hh:mm:ss tt"
const clockTime = template.replace("hh", "03")
      .replace("mm", "33")
      .replace("ss", "33")
      .replace("tt", "PM")

console.log(clockTime)

const both = compose(
    civilianHours,
    appendAMPM
)

both(new Date())

const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg)

// clock with composition
const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const serializeClockTime = date =>
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
            clockTime.hours
    })

const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "PM" : "AM"
    })

const display = target => time => target(time)

const formatClock = format =>
    time =>
        format.replace("hh", time.hours)
              .replace("mm", time.minutes)
              .replace("ss", time.seconds)
              .replace("tt", time.ampm)

const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
            "0" + clockTime[key] :
            clockTime[key]
    })

const convertToCivilianTime = clockTime =>
   compose(
       appendAMPM,
       civilianHours
   )(clockTime)

const doubleDigits = civilianTime =>
   compose(
       prependZero("hours"),
       prependZero("minutes"),
       prependZero("seconds")
   )(civilianTime)

const startTicking = () =>
   setInterval(
       compose(
           clear,
           getCurrentTime,
           serializeClockTime,
           convertToCivilianTime,
           doubleDigits,
           formatClock("hh:mm:ss tt"),
           display(log)
       ),
       oneSecond()
   )

startTicking()
