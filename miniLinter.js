let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

const betterWords = storyWords.filter(word => 
  !unnecessaryWords.includes(word)); 

let overusedCounter = 0
for (i = 0; i < betterWords.length; i++) {
  if (overusedWords.includes(betterWords[i])) {
    overusedCounter += 1;
  }
}

let sentenceCount = 0
for (i = 0; i < betterWords.length; i++) {
  if (betterWords[i][betterWords[i].length-1] === '.' || betterWords[i][betterWords[i].length-1] === '!') {
    sentenceCount += 1;
  }
}; 

/* or per suggested route
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentenceCount += 1;
  }
});  */

//console.log('Word Count = ' + storyWords.length + "\n" + 'Sentences = ' + sentenceCount + "\n" + 'Overused words = ' + overusedCounter);
//console.log(betterWords.join(' '));

const lessenOverused = (story, words) => {
  let overusedCounter = 0;
  let newArray = [];
  for (i = 0; i < story.length; i++) {
    for (j = 0; j < words; j++) {
      if (story[i] === words[j]) {
        overusedCounter += 1;
        newArray.push(story[i]);
        if (overusedcounter % 2 === 0) {
          newArray.pop();
        }
      } else {
        newArray.push(story[i]);
      }
    }
  }
  return newArray;
}

const improvedStory = lessenOverused(betterWords, overusedWords);
console.log(improvedStory.join(' '));

/* to continue adding: Here are some ideas:
- For the overused words, remove it every other time it appears.
- Write a function that finds the word that appears the greatest number of times.
- Replaced overused words with something else. */