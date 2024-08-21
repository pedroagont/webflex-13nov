# Lighthouse Labs | AI Breakout Session #3

> When there are no buddies for pair programming, ask a friendly LLM!

## What is an LLM?

[**LLM**: Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)

A model trained on human language. [Artificial intelligence (AI)](https://en.wikipedia.org/wiki/Artificial_intelligence) use such models to both understand requests and generate natural-sounding responses.

A popular AI using such a model is [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT)! Specifically, it makes use of a [**_g_**enerative **_p_**re-trained **_t_**ransformer (GPT)](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer) model. It is capable of very believable and natural conversation, based on all sorts of posts and data across the internet. This can mean it won't provide accurate information all of the time—we must be diligent, and ready to fact-check if anything sounds fishy. 🐠

## Why an LLM for Pair Programming?

Tools like [ChatGPT](https://openai.com/blog/chatgpt) and [Phind](https://www.phind.com/) are built to talk to us. It is easy for us to ask a question, and then follow it up with additional questions to carry out steps in sequence. AIs like this can often keep some context in mind from previous questions in a session to better help you work through a larger problem.

## A Small Problem

Let's start small. Let's suppose we are tasked with writing a function that:

- Transforms a given string into a bulleted list, and returns this result string
- Separate the text into bullets based on newlines found in the text
- Bullets can simply be the `*` character
- Empty lines should be ignored

Here is some sample input text we're expected to change:

```javascript
const text = `
HTML
CSS
JavaScript
JSON

XML
`;
```

How do we approach this? Can you think of any options? ChatGPT and Phind probably can! Try to simplify your problem. Set up an experiment and know your expected output:

```javascript
const text = `
HTML
CSS
JavaScript
JSON

XML
`;

/**
 * String to bulleted list
 * @param {String} inputString String with newlines
 * @return {String} Bulleted list string
 */
const newlineStringToBulletedList = (inputString) => {
  let bulletedList = '';

  // Solution here.

  return bulletedList;
};

const result = newlineStringToBulletedList(text);
console.log(result); // undefined (We have work to do!)

// Expected result:
`* HTML
* CSS
* JavaS
* JSON
* XML`;
```

### Break down the problem!

As we've done in previous sessions, break down the problem into pieces. AI tools can struggle if we ask very big questions, or if we ask for it to write a whole program. Asking piece-by-piece will be more reliable and it'll be easier for us to troubleshoot and debug if there is a mistake in the approach.

Some steps we might consider could be...

- For each newline character, add the substring to an array (each item will be an item for our bulleted list)
- Loop through each item...
  - ignore if this line is empty (try to `String.prototype.trim()`)
  - add a '\* ' to the beginning of each item
  - concatenate each bulleted item to a string variable
- Return the full formatted string

What if you froze, and after fifteen minutes still had no ideas? We can ask ChatGPT or Phind for ideas, too. Try a prompt that will help you _plan_ or _pseudo-code_ your potential solution:

> **_Potential Prompt:_**
> I have a string with newlines. Using NodeJS I want to write a function that will read through the string, ignore empty lines, and add a bullet character '\*' to each line before returning a string.
> In order for me to accomplish this, I first want to plan an approach. Without writing code, can you give me a number of steps I can take to tackle this?

![01-CHATGPT-PLANNING.png](01-CHATGPT-PLANNING.png)

![02-PHIND-PLANNING.png](02-PHIND-PLANNING.png)

Note the emphasis on planning and steps. It is very important we understand our approach. If anything appears unclear in the approach, we should ask follow-up questions.

- What is `String.prototype.split()` and how do I use it?
- How do I find out if a string is empty or not in JavaScript?
- How do I concatenate a '\*' to the beginning of my string?
- How do I create a string from an array? Can I make sure each item has a newline between?

Take time to understand each piece, implement them one at a time. It'll be easiest to find out if there is an error by following this process.

### You should already be talking to your duck or a friend... why not AI?

Try and implement a solution. Implement each step one-by-one, and temporarily add `console.log` entries to see if your approach is working. If a step breaks, ask ChatGPT what might cause that error, and see if you can troubleshoot it together!

```JavaScript
const text = `
HTML
CSS
JavaScript
JSON

XML
`;

/**
 * String to bulleted list
 * @param {String} inputString String with newlines
 * @return {String} Bulleted list string
 */
const newlineStringToBulletedList = (inputString) => {
    let bulletedList = '';

    // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    const arrayOfLines = inputString.split('\n'); // Be descriptive with names in your code.
    // console.log('arrayOfLines:', arrayOfLines);

    // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const removeEmptyLines = arrayOfLines.filter((line) => line.trim() !== '');
    // console.log('removeEmptyLines:', removeEmptyLines);

    // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const startEachLineWithBullet = removeEmptyLines.map((line) => `* ${line}`);
    // console.log('startEachLineWithBullet:', startEachLineWithBullet);

    // Convert bullets array to string using newlines.
    // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    bulletedList = startEachLineWithBullet.join('\n');

    return bulletedList;
};

const result = newlineStringToBulletedList(text);
console.log(result); // result:
`* HTML
* CSS
* JavaS
* JSON
* XML`
```

## A bigger problem...

Let's suppose we want to do something a little more complicated. We want to develop a game called "Guess the Number." Here are the requirements:

- The player begins with five "attempts"
- The computer should select a number between 1 and 100
- The player is asked to guess this number
- If the player guesses wrong
  - They lose an "attempt"
  - They are told if the guess was too high
  - They are told if the guess was too low
- If the player runs out of attempts, they lose
  - Tell the player they have lost
  - Let them know what the number was
- If the player guesses the number
  - Let them know how many attempts it took them
  - Congratulate them on their success
- If the player wins or loses, offer them a way to play again
  - Their attempts will be set back to five
  - A new number will be selected by the computer

### Thinking about our solution.

While the rules of this game are detailed and rigid, the above has not mentioned a stack. It would be possible to implement this game using...

- NodeJS (standard input)
- Express and EJS
- React
- Ruby (`gets`, `puts`)
- Ruby on Rails
- ...and many more! (NextJS, Django, PHP, etc.)

With ChatGPT, Phind, or another AI, as a pair programmer any of the above become possible and can help teach or remind you of basics in either a familiar or new environment. We'll be exploring a React solution today, but I challenge you to try other options above and see if you can create this game again in a new way.

### Start with steps you know.

1. `create-react-app react-guess-the-number`
2. Remove unnecessary files
3. Plan!

What's our plan? We'll try and keep the application shallow in the interest of time.

- `App.jsx` will run and display our game.
- What state do we need?

### What state do we need?

Having trouble deciding what state would be important? We can ask our tools.

> **_Potential Prompt:_**
> In a React app, what would I need to consider as state given these requirements? (Please provide no code, I am planning right now.)
>
> - The player begins with five "attempts"
> - The computer should select a number between 1 and 100
> - The player is asked to guess this number
> - If the player guesses wrong
>   - They lose an "attempt"
>   - They are told if the guess was too high
>   - They are told if the guess was too low
> - If the player runs out of attempts, they lose
>   - Tell the player they have lost
>   - Let them know what the number was
> - If the player guesses the number
>   - Let them know how many attempts it took them
>   - Congratulate them on their success
> - If the player wins or loses, offer them a way to play again
>   - Their attempts will be set back to five
>   - A new number will be selected by the computer

![03-CHATGPT-GUESSTHENUMBER-PLANNING.png](03-CHATGPT-GUESSTHENUMBER-PLANNING.png)

![04-PHIND-GUESSTHENUMBER-PLANNING.png](04-PHIND-GUESSTHENUMBER-PLANNING.png)

These sorts of responses give us an idea of some state we might need to keep track of.

### What sort of logic will we need?

Let's ask another question about our requirements. Remember, we want steps to a plan before we dive in, and if we run into trouble while coding we can send the AI our error message and go back-and-forth to troubleshoot! Troubleshooting one step or one feature at a time will be easier than asking for a large portion of code.

> **_Potential Prompt:_**
> In a React app, what logical steps would I need to create a game that follows these requirements? Please don't write code, I am planning right now.
>
> - The player begins with five "attempts"
> - The computer should select a number between 1 and 100
> - The player is asked to guess this number
> - If the player guesses wrong
>   - They lose an "attempt"
>   - They are told if the guess was too high
>   - They are told if the guess was too low
> - If the player runs out of attempts, they lose
>   - Tell the player they have lost
>   - Let them know what the number was
> - If the player guesses the number
>   - Let them know how many attempts it took them
>   - Congratulate them on their success
> - If the player wins or loses, offer them a way to play again
>   - Their attempts will be set back to five
>   - A new number will be selected by the computer

![05-CHATGPT-REACT-PLANNING.png](05-CHATGPT-REACT-PLANNING.png)

![06-PHIND-REACT-PLANNING.png](06-PHIND-REACT-PLANNING.png)
