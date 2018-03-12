function dwarfRollCall(dwarves) {
var myString = `1. ${dwarves[0]} `
		for (let i = 1; i< dwarves.length; i++) {
			myString += `${i+1}. ${dwarves[i]} `
		}
		return myString
}

function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i< planeteerCalls.length; i++)
planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (let i = 0; i< words.length; i++) {
    if (words[i].length > 4) {
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
      return foods[i]
    }
  }
  return "no cheese!"
}
