 const estPremier = n => {
  // Si n est inférieur à 2, ce n'est pas un nombre premier
  if (n < 2) {
    return false;
  }
  // Pour chaque nombre entre 2 et la racine carrée de n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // Si n est divisible par i, ce n'est pas un nombre premier
    if (n % i === 0) {
      return false;
    }
  }
  // Si n'a pas été divisible par aucun des nombres entre 2 et la racine carrée de n, c'est un nombre premier
  return true;
}
console.log(estPremier(3))

