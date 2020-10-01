const test = require("ava");

const { hello } = require("../dist/pollyscript");

test("`hello()` returns `Hello 🗺️!`", (t) => {
  const result = hello();

  t.is(result, `Hello 🗺️!`);
});
