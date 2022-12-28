const nombreVoyelle = word =>{
    let cpt=0
    for (i=0;i<word.length;i++){   
        const voyelles = word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u"||word[i]=="y"
       if  (voyelles) cpt++
    }
    return cpt;
}
// let word=prompt("Saisir un mot : ")
console.log(`le mot bonjour contient ${nombreVoyelle("bonjour")} voyelles`)
// ou 
// function nombreVoyelle(word){
//     const voyelles =['a','e','i','o','u','y']
//     const result = word
//                     .split('')
//                     .filter(letter => voyelles.includes(letter))      
//     return result.length;
// }
// let word=prompt("Saisir un mot : ")
// document.write(`${word} contient ${nombreVoyelle(word)} voyelles`)
