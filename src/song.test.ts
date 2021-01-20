import { expect } from "chai";
import {song} from "./song";

describe('Song', () => {
  it('generates a song given original parameters', () => {
    expect(song([
      { name: 'fly', comment: "I don't know why she swallowed a fly - perhaps she'll die!"},
      { name: 'spider', comment: "That wriggled and wiggled and tickled inside her."},
      { name: 'bird', comment: "How absurd to swallow a bird."},
      { name: 'cat', comment: "Fancy that to swallow a cat!"},
      { name: 'dog', comment: "What a hog, to swallow a dog!"},
      { name: 'cow', comment: "I don't know how she swallowed a cow!"},
      { name: 'horse', comment: "...She's dead, of course!`;"}
    ])).to.eql(`There was an old lady who swallowed a fly.
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a spider;
That wriggled and wiggled and tickled inside her.
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a bird;
How absurd to swallow a bird.
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a cat;
Fancy that to swallow a cat!
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a dog;
What a hog, to swallow a dog!
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a cow;
I don't know how she swallowed a cow!
She swallowed the cow to catch the dog,
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a horse...
...She's dead, of course!`)


    }
  );
});
