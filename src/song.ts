function generateSwallowedLine(predator: string, prey: string): string {
  return `She swallowed the ${predator} to catch the ${prey}`;
}

function generateSwallowedLines(animals: [string, string, ...string[]]): string {
  if (animals.length > 2) {
    const [prey, predator] = animals.slice(-2)
    return `${generateSwallowedLine(predator, prey)},\n${generateSwallowedLines(animals.slice(0, -1) as any)}`
  }
  return `${generateSwallowedLine(animals[1], animals[0])};`
}

export const song = (animals: string[]) => `There was an old lady who swallowed a ${animals[0]}.
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[1]};
That wriggled and wiggled and tickled inside her.
${generateSwallowedLines([animals[0], animals[1]])}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[2]};
How absurd to swallow a ${animals[2]}.
${generateSwallowedLines([animals[0], animals[1], animals[2]])}
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[3]};
Fancy that to swallow a ${animals[3]}!
She swallowed the ${animals[3]} to catch the ${animals[2]},
She swallowed the ${animals[2]} to catch the ${animals[1]},
She swallowed the ${animals[1]} to catch the ${animals[0]};
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[4]};
What a hog, to swallow a ${animals[4]}!
She swallowed the ${animals[4]} to catch the ${animals[3]},
She swallowed the ${animals[3]} to catch the ${animals[2]},
She swallowed the ${animals[2]} to catch the ${animals[1]},
She swallowed the ${animals[1]} to catch the ${animals[0]};
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[5]};
I don't know how she swallowed a ${animals[5]}!
She swallowed the ${animals[5]} to catch the ${animals[4]},
She swallowed the ${animals[4]} to catch the ${animals[3]},
She swallowed the ${animals[3]} to catch the ${animals[2]},
She swallowed the ${animals[2]} to catch the ${animals[1]},
She swallowed the ${animals[1]} to catch the ${animals[0]};
I don't know why she swallowed a ${animals[0]} - perhaps she'll die!

There was an old lady who swallowed a ${animals[6]}...
...She's dead, of course!`;
