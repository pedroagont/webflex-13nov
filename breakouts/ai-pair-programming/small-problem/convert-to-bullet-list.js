function convertToBulletedList(text) {
  // Step 1: Trim leading and trailing whitespace
  const trimmedText = text.trim();

  // Step 2: Split the text into lines
  const lines = trimmedText.split('\n');

  // Step 3: Filter out empty lines
  const nonEmptyLines = lines.filter((line) => line.trim() !== '');

  // Step 4: Map lines to bullets
  const bulletedLines = nonEmptyLines.map((line) => `* ${line}`);

  // Step 5: Join the bulleted lines
  const result = bulletedLines.join('\n');

  // Step 6: Return the result
  return result;
}

// Sample input
const text = `
HTML
CSS
JavaScript
JSON

XML
`;

// Call the function and print the result
console.log(convertToBulletedList(text));
