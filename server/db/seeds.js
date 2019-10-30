use quiz;
db.dropDatabase();
db.questions.insertMany([
  {
    "question": "What is Rapid Application Development?",
    "answer": "It prioritises rapid prototyping and quick feedback.",
    "url": "https://kissflow.com/rad/rapid-application-development/",
    "topic": "PDA",
    "isMastered": false
  },
  {
    "question": "What is the Waterfall model?",
    "answer": "The traditional software development model. The stages are: requirements analysis; design; development; testing; maintenance.",
    "url": "https://en.wikipedia.org/wiki/Waterfall_model",
    "topic": "PDA",
    "isMastered": true
  },
  {
    "question": "What is an expression? Give an example.",
    "answer": "In most cases I've seen, it's the code to the left of the = sign in a statement. The expression is equal to a value. For instance, in '3 + 5 = 8', '3 + 5' is the expression.",
    "url": "https://www.webopedia.com/TERM/E/expression.html",
    "topic": "PDA",
    "isMastered": true
  },
  {
    "question": "What is a statement? Give an example.",
    "answer": "An expression plus a value, for example '1 + 2 = 3'.",
    "url": "https://en.wikipedia.org/wiki/Statement_(computer_science)",
    "topic": "PDA",
    "isMastered": false
  },
  {
    "question": "What is the difference between an expression and a statement? Give examples.",
    "answer": "A statement is made up of an expression plus a value. For instance, in the statement '1+1=2', '1+1' is the expression and '2' is the value.",
    "url": "https://en.wikipedia.org/wiki/Statement_(computer_science)",
    "topic": "PDA",
    "isMastered": true
  },
  {
    "question": "What is iteration? Give an example.",
    "answer": "A loop that goes through instructions ",
    "url": "https://prezi.com/tvoflvm-1xf_/p3-explain-sequence-selection-and-iteration-as-used-in-computing/",
    "topic": "PDA",
    "isMastered": false
  },
  {
    "question": "What is selection? Give an example.",
    "answer": "One of the three basic programming structures. Selection is when a question is answered and there may be more than one outcome.",
    "url": "https://prezi.com/tvoflvm-1xf_/p3-explain-sequence-selection-and-iteration-as-used-in-computing/",
    "topic": "PDA",
    "isMastered": false
  },
  {
    "question": "What is sequence? Give an example.",
    "answer": "A set of instructions in order.",
    "url": "https://www.webopedia.com/TERM/S/sequence.html",
    "topic": "PDA",
    "isMastered": true
  },
  {
    "question": "What method do you use to make a string all lower case?",
    "answer": ".toLowerCase()",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",
    "topic": "JavaScript",
    "isMastered": true
  },

  {
    "question": "What is a computed property? How and why would you use one?",
    "answer": "It's a method for a complex logic. You would put it inside the script tags. It's useful, because too much complex logic in your in-template expressions can be hard to read and maintain.",
    "url": "https://vuejs.org/v2/guide/computed.html",
    "topic": "Vue",
    "isMastered": false
  },

  {
    "question": "What is a callback?",
    "answer": "A function that is used in another function as an argument.",
    "url": "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
    "topic": "JavaScript",
    "isMastered": false
  },

  {
    "question": "What is a higher order function?",
    "answer": "A function that can take another function as an argument.",
    "url": "https://www.sitepoint.com/higher-order-functions-javascript/",
    "topic": "JavaScript",
    "isMastered": false
  },

  {
    "question": "In Ruby, what keyword do you use to create a function?",
    "answer": "Def - this is because you are defining a function.",
    "url": "https://www.sitepoint.com/higher-order-functions-javascript/",
    "topic": "Ruby",
    "isMastered": true
  },

  {
    "question": "What is instantiation?",
    "answer": "The process of creating an instance of a class. ",
    "url": "https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes#Instantiation",
    "topic": "Ruby",
    "isMastered": false
  },

  {
    "question": "What is a Vue directive? Give examples.",
    "answer": "A piece of code in the markup (HTML) that tells the app what to do to a DOM element. Examples - v-bind, v-if, v-on:click",
    "url": "https://012.vuejs.org/guide/directives.html",
    "topic": "Vue"
  }

])
