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

export const song = (fullAnimals: {name: string; comment: string}[]) => {
  const animals = fullAnimals.map(a => a.name);
  const comments = fullAnimals.map(a => a.comment);
  return `${getFirstTwoLines(animals[0], comments[0],'.')}

${getFirstTwoLines(animals[1], comments[1],';')}
${generateSwallowedLines(animals.slice(0, 2))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

${getFirstTwoLines(animals[2], comments[2],';')}
${generateSwallowedLines(animals.slice(0, 3))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

${getFirstTwoLines(animals[3], comments[3],';')}
${generateSwallowedLines(animals.slice(0, 4))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

${getFirstTwoLines(animals[4], comments[4],';')}
${generateSwallowedLines(animals.slice(0, 5))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

${getFirstTwoLines(animals[5], comments[5],';')}
${generateSwallowedLines(animals.slice(0, 6))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[6]}...
${comments[6]}`
};
