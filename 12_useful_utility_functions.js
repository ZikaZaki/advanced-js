
// #1 properCase: Capitalize the first letter of a string.
const properCase = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};
