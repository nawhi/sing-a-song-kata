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

export const song = (fullAnimals: {name: string; comment: string}[]) => {
  const animals = fullAnimals.map(a => a.name);
  return `There was an old lady who swallowed a ${fullAnimals[0].name}.
${fullAnimals[0].comment}

There was an old lady who swallowed a ${animals[1]};
That wriggled and wiggled and tickled inside her.
${generateSwallowedLines(animals.slice(0, 2))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[2]};
How absurd to swallow a ${animals[2]}.
${generateSwallowedLines(animals.slice(0, 3))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[3]};
Fancy that to swallow a ${animals[3]}!
${generateSwallowedLines(animals.slice(0, 4))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[4]};
What a hog, to swallow a ${animals[4]}!
${generateSwallowedLines(animals.slice(0, 5))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[5]};
I don't know how she swallowed a ${animals[5]}!
${generateSwallowedLines(animals.slice(0, 6))}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[6]}...
...She's dead, of course!`;
};
