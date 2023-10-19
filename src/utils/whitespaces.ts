export const removeWhitespaces = (str: string) => {
  // Remove leading and trailing whitespaces
  let trimmed = str.replace(/^\s+|\s+$/g, '');

  // Remove whitespaces in the middle
  trimmed = trimmed.replace(/\s+/g, '');

  return trimmed;
}
