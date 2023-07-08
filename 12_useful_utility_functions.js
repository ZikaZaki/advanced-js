
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
