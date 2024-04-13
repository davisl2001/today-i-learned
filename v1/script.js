const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//console.log(CATEGORIES.find((cat) => cat.name === "society").color);

// Selecting DOM elements
// btn is a DOM element and an object
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();
// asycronous function
async function loadFacts() {
  // generates a Promise - a future value
  // wait for code - only used on Promises
  const res = await fetch(
    "https://wqzatqohalouwiuvlnrs.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxemF0cW9oYWxvdXdpdXZsbnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNjI1MDcsImV4cCI6MjAyMzgzODUwN30.49OGNymWCWrRcFXyi-SpuovQL66stmqdKBDTaEzA7PY",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxemF0cW9oYWxvdXdpdXZsbnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNjI1MDcsImV4cCI6MjAyMzgzODUwN30.49OGNymWCWrRcFXyi-SpuovQL66stmqdKBDTaEzA7PY",
      },
    }
  );
  // convert file to json
  const data = await res.json();
  console.log(data);
  //const filteredData = data.filter((fact) => fact.category === "society");

  createFactList(data);
}
// Can call functions before they are defined by it's keyword
//createFactList(initialFacts);
function createFactList(dataArray) {
  //factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
  ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
    >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>  
  </li>`
  );
  //console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
// Toggle form visibility
//green text are functions - are reusable
btn.addEventListener("click", function () {
  //contains return true or false
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
// filter needs to return a boolean
//console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
// only return first element
//console.log([7, 64, 6, -23, 11].find((el) => el > 10));

// directory
//console.dir(btn);
/*variable that can change value later
let votesInteresting = 23;
let votesMindblowing = 5;
variable
const text = "Lisbon is the capital of Portugal";
votesInteresting = votesInteresting + 1;
other way = votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
for equal we use ===
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.533ccc")); 
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  //no need for {} if code is 1 line long
  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;

  //or used return 2024 - year;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));
// arrow function - return value, for fast onle line return
// conceptually similar to code above
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;
console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));

let votesInteresting = 20;
let votesMindblowing = 0;
//if else can't always be used
if (votesInteresting === votesMindblowing) {
  //pop-up
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
  console.log("Mindblowing fact!!");
}

// falsy values: 0, '', null, unndefined
// truthy value is everything else
if (votesMindblowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so special...");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;
// ? ternary operator returns value, more useful than if else
const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sourses...";

//alert(message);

const text = "Lisbon is the capital of Portugal";
// method - function on to something
const upperText = text.toUpperCase();
console.log(upperText);

// template literal```$ - use variable
const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} year old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}`;
console.log(str);*/

// arrays - sheft where you can put multiple boxes with different content, it start with 0, if going beyong the number of elements you get undefined
/*const fact = ["Lisbon is the capital of Portugal", 2015, true];
//console.log(fact);
console.log(fact[2]);
// to know how many elements are there
console.log(fact.length);
console.log(fact[fact.length - 1]);
// structuring
//const [text, createdIn, isCorrect] = fact;
//console.log(createdIn);
// spreading - unpack array - only do it inside of arrays
const newFact = [...fact, "society"];
console.log(newFact);
// object - store and give values
const factObj = {
  // property
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSumary: function () {
    // don't need in modern Javascript
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};
// . are properties that are a functions which so they are called methods
console.log(factObj.text);
// rarelly used
console.log(factObj["text"]);
// objects and arrays are the most used
const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSumary());
// looping
// el - element
// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// what arrow functions were made for
const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);
// very commom
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  //no need for {} if code is 1 line long
  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
// add separator
console.log(factAges.join(" & "));
*/
