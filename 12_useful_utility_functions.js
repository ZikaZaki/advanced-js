
// #1 properCase: Capitalize the first letter of a string.
const properCase = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

// #2 log: Console log any type of content.
const log = (content) => {
  console.log(content);
};

log(properCase("rEsEArcH"));

// #3 eventLog: Console log the event target.
const eventLog = (e) => console.log(e.target);

// #4 select: Query selector with optional scope.
const select = (selector, scope) => {
  return (scope || document).querySelector(selector);
};

// const body = select('body');
// log(body);
// #5 listen: An addEventListener wrapper.
/**NOTE: !! is a double negation operator. It's used to convert a value to its boolean equivalent. This means that if the value is truthy (i.e. not false, 0, null, undefined, NaN, or an empty string), then the "!" operator will return false; otherwise, it will return true. */
const listen = (target, event, callback, capture = false) => {
  target.addEventListener(event, callback, !!capture);
};

// listen(body, "click", eventLog);

// #6 sanitizeInput: Sanitize input to text, escaping the html tags and special characters. use Regex or try this...
const sanitizeInput = (inputValue) => {
  const div = document.createElement('div');
  div.textContent = inputValue;
  return div.innerHTML;
};

// const dirtyInput = "<script>alert('XSS Attack!')</script>&othervalues";
// const cleanInput = sanitizeInput(dirtyInput);
// log(cleanInput);

// #7 sanitizeInput: Using Regex to sanitize input by removing any html tags or special characters.
function sanitizeInput(input) {
  // Remove HTML tags
  let sanitizedInput = input.replace(/<[^>]*>/g, '');
  // Remove special characters
  sanitizedInput = sanitizedInput.replace(/[^\w\s]/gi, '');
  return sanitizedInput;
}
