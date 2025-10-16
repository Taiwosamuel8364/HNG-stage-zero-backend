const { error } = require("console");

const cat_fact = async (max_length) => {
  const response = await fetch(
    `https://catfact.ninja/fact?max_length=${max_length}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  return data;
};

module.exports = cat_fact;
