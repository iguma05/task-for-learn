async function sayJoke(apiUrl, jokeId) {
  return await fetch(`${apiUrl}`)
    .then((response) => {
      return response.json();
      throw new Error(`No jokes at url: ${apiUrl}`);
    })
    .then((response) => {
      const newData = response.jokes.filter((item) => item.id === jokeId);
      if (newData.length) {
        return newData;
      }
      throw new Error(`No jokes found id: ${jokeId}`);
    })
    .then((response) => {
      const [object] = response;
      object.saySeput = function () {
        return this.setup;
      };
      object.sayPunchLine = function () {
        return this.punchLine;
      };
      return object;
    })
    .catch(console.log);
}

const newObject = {
  id: 101,
  setup: "Who is Santa's favorite singer?",
  punchLine: "Elf-is Presley!",
};

newObject.saySeput = function () {
  return this.setup;
};

console.log(newObject.saySeput());

function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x > 0 && y < 0) {
    return 4;
  } else {
    return 3;
  }
}
