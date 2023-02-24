// JSON is a lightweight data interchange format between client and server, all languages have it to transfer data

const movies = 
    [{
        name: 'bullet train',
        year: 2020,
        hero: 'brad-pitt'
    },{
        name: 'kimi no wa',
        year: 2999, 
        hero: 'nu one'
    },{
        name: 'boku no hero',
        year: 500,
        hero: 'chrus'
    }]
console.log((movies[0])) // { name: 'bullet train', year: 2020, hero: 'brad-pitt' }

// you can convert the entire JSON object into a string 
const study = {
    time: 'morning',
    what: 'coding'
}
var jsonString = JSON.stringify(study);
console.log(jsonString); // {"time":"morning","what":"coding"}

// it can be re converted back into a JSON object using parse
const jsonStudying = JSON.parse(jsonString); // you can use the parse function only on a JSON string
console.log(jsonStudying);
console.log(jsonStudying.what);

// you cant send data as pure JS object, you need to convert it to a string and then parse it and get it back
/**Overall, JSON is a data interchange format used for sending data between systems, while JavaScript objects are used for in-memory representation 
 * and manipulation of data within a JavaScript program.
 * You can only send text through the internet, and JSON objects have information for data exchange
 * all the data gets converted from JSON object to a string and the receiver then parses that data to get it back to JSON */


// IMPORTANT - serialization and deserialization
/**
 * This process of converting the JSON to a string for transmission and then parsing it back into a JSON object 
 * is commonly referred to as serialization and deserialization, respectively.
 */

//JSON.stringify for anything, it will make it a string and parsing will fail if its not of JSON format