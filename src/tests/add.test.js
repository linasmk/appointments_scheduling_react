const { TestScheduler } = require("jest");

const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test("Should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test(`Should print ${name}`, () => {
  const result = generateGreeting("Martin");
  expect(result).toBe("Hello Martin!");
});
