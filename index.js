function dwarfRollCall(dwarves){
  let myString = `1. ${dwarves[0]} `
  
  for (let i =1; i<dwarves.length; i++){
    myString += `${i+1}. ${dwarves[i]} `
  }
  return myString;
}

function summonCaptainPlanet (planeteerCalls){

  for(let i = 0; i<planeteerCalls.length; i++) {
    planeteerCalls[i]= planeteerCalls[i].toUpperCase() + "!"
}
  return planeteerCalls
}

function longPlaneteerCalls(array){
  for(let i = 0; i<array.length; i++){
    if(array[i].length > 4){
      return true;
    }
  }
  return false;
} 

function findTheCheese(array){
  let cheese= ["gouda","cheddar", "camembert"]
  
  for(let i = 0; i<array.length; i++){
    let cheeseIdx = cheese.indexOf(array[i]);
    if(cheeseIdx !== -1){
      return array[i]
    }
  }
  return 'no cheese!'
}
