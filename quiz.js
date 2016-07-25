console.log("hi");


/*********** EVENT LISTENERS ************/

/* Function checking if fields are populated */
function checkFields () {
  var treeHeight = document.getElementById("treeHeight");
  var treeCharacter = document.getElementById("treeCharacter");

  if (treeHeight.value === "" || treeCharacter.value === "") {
    alert("Both fields must have a value.");
  }
}

/* Checking fields when button is clicked */
document.getElementById("buttonId").addEventListener ("click", checkFields);


/* Setup for checking when enter key is pressed */
document.addEventListener("keypress",
  function (e) {
    if (e.key === "Enter") {
      checkFields();
    }
});


/********** HEIGHT OF TREE ************/

var treeHeight = document.getElementById("treeHeight").value;
treeHeight = parseInt(treeHeight);
var treeCharacter = document.getElementById("treeCharacter").value;
var tree = "";

//outter loop will run the same number of times as the height of the tree (hence creating the height)
for (var line = treeHeight; line > 0; line--) {
  var tree = " " + treeCharacter;
//this loop will add a space with each addtional line
    for (var spaces = line - 1; spaces > 0 ; spaces--) {
      var tree = tree += spaces;
//this loop will then add two characters that the user has input
    for (var characters = 0; characters === ((treeHeight * 2) - 1); characters++) {
      var tree = tree += (treeCharacter + treeCharacter);
    }
  }
}



// if 7 is the height, and * is the character then:

// 6 spaces 1 character
//       *
// 5 spaces 3 characters (-1 space, +2 characters)
//      ***
// 4 spaces 5 characters (-1 space, +2 characters)
//     *****
// 3 spaces 7 characters (-1 space, +2 characters) = LOOP
//    *******
//
// start with 1 character = add 2 each time = LOOP 1
// start with (treeHeight - 1) space, decrement 1 each time = LOOP 2
//
