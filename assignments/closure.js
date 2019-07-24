// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function universe(){
  const age = "Crazy old.";

  const songs = "Across the ___";
  console.log("Come find me, my ship crashed!");
  galaxy();

  function galaxy(){
    const name = "Milky Way";
    console.log(`I'm flying across the ${name}`);
    solar_system();
    
    function solar_system(){
      const planets = 9;
      console.log(`In my corner of the ${name} there's ${planets} planets.`);
      
    }
  }
}
universe();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
