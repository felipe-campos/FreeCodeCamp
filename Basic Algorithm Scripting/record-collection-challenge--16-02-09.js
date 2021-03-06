// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {
  
  // first check if update is beeing called with the correct # of arguments
  if (arguments.length > 3) {
    throw new Error ("Function update expects 3 arguments.");
  }
  
  // use variables to avoid re-evaluating the same expression
  var valueIsBlank = value === "",
      propIsTracks = prop === "tracks",
      albumId = collection[id];             // albumId is a reference to collection[id] object

  if (!valueIsBlank) {                      // if value is non-blank...
    if (!propIsTracks)                      // ... and prop is not "tracks"...
      albumId[prop] = value;                // ... update or set the value for the prop.
    else {                                  // if the prop is "tracks" and value is non-blank...
      albumId[prop] = albumId[prop] || [];  // if "tracks" isn't set, set it as [] so we can use .push
      albumId[prop].push(value);            // ... push the value onto the end of the tracks array.
    }
  }
  else                      // if value is blank...
    delete albumId[prop];   // ... delete that prop. (READ OBSERVATION BELOW) 
  
  // OBS: beware you can't delete user-defined variables declared with var
  // 
  // which means if you had `var albumIdProp = collection[id][prop];` and tried
  // `delete albumIdProp`, you'd get an error.
  
  return collection;
}

// Alter values below to test your code
update(5439, "artist", "ABBA");


/*

You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.

Write a function which takes an id, a property (prop), and a value.

For the given id in collection:

If value is non-blank (value !== "") and prop is not "tracks" then update or set the value for the prop.

If the prop is "tracks" and value is non-blank, push the value onto the end of the tracks array.

If value is blank, delete that prop.

Always return the entire collection object.

Note
Don't forget to use bracket notation when accessing object properties with variables.

*/

/*

After update(5439, "artist", "ABBA"), artist should be "ABBA"
After update(2548, "artist", ""), artist should not be set
After update(1245, "tracks", "Addicted to Love"), tracks should have a length of 1
After update(2548, "tracks", ""), tracks should not be set

*/