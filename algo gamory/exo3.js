const nombreConsonnes = (word) => {
      const voyelles =['a','e','i','o','u','y']
      const consonnesArray = word
                      .split('')  
                      .filter(letter => !voyelles.includes(letter))      // filtre = boucle 
      return consonnesArray.length;
  }
//   let word=prompt("Saisir un mot : ")
console.log(`le mot bonjour contient ${nombreConsonnes("bonjour")} consonnes`)
