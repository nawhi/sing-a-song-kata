function generateSwallowedLine(predator: string, prey: string): string {
  return `She swallowed the ${predator} to catch the ${prey}`;
}

function generateSwallowedLines(animals: string[]): string {
  if (animals.length < 2) {
    throw new Error("needed an array of at least length 2");
  }
  if (animals.length > 2) {
    const [prey, predator] = animals.slice(-2)
    return `${generateSwallowedLine(predator, prey)},\n${generateSwallowedLines(animals.slice(0, -1))}`
  }
  return `${generateSwallowedLine(animals[1], animals[0])};`
}

function getFirstTwoLines(name: string, comment: string, closingPunctuation: string) {
  return `There was an old lady who swallowed a ${name}${closingPunctuation}
${comment}`
}

function getFinalLine(animal: string, comment: string) {
  return `There was an old lady who swallowed a ${animal}...
${comment}`
}

export const song = (fullAnimals: {name: string; comment: string}[]) => {
  const animals = fullAnimals.map(a => a.name);
  const comments = fullAnimals.map(a => a.comment);
  const middleLines = fullAnimals.slice(1, -1).map((animal, i, arr) => {
    return `${getFirstTwoLines(animal.name, animal.comment, ';')}
${generateSwallowedLines(animals.slice(0, i+2))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!`
  }).join('\n\n')
  return `${getFirstTwoLines(animals[0], comments[0], '.')}

${middleLines}

${getFinalLine(animals[animals.length-1], comments[comments.length-1])}`
};
