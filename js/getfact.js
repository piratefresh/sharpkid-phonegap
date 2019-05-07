const factContentText = document.getElementById("fact_box");
console.log(factContentText);

/* const getFact = async () => {
  // await response of fetch call
  let response = await fetch(
    `http://randomuselessfact.appspot.com/random?language=en`,
    { mode: "no-cors" }
  );
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
};

const setFact = fact => {
  factContentText.innerText(`${fact.text}`);
};

(async () => {
  const factPromise = getFact();
  await factPromise;
  setFact(factPromise); // async call
})();
 */

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
console.log(dd + mm);

// async function
async function fetchAsync() {
  // await response of fetch call
  let response = await fetch(`http://numbersapi.com/${dd}/${mm}/date?json`);
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

// trigger async function
// log response or catch error of fetch promise
fetchAsync()
  .then(data => {
    factContentText.innerHTML = `<p>${data.text}</p>`;
  })
  .catch(e => {
    console.log(e);
  });
