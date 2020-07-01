export function minLength(input, minCharacters) {
  const { value } = input;

  if (value.length >= minCharacters) {
    return true;
  } else {
    return false;
  }
}
