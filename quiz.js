console.log("hi");


/*********** EVENT LISTENERS ************/
/* Checking fields when button is clicked */
document.getElementById("buttonId").addEventListener("click", checkFields);
/* Setup for checking when enter key is pressed */
document.addEventListener("keypress",
  function (e) {
    if (e.key === "Enter") {
      checkFields();
    }
});
/* Function checking if fields are populated */
var treeHeight = document.getElementById("treeHeight");
var treeCharacter = document.getElementById("treeCharacter");

function checkFields () {
  if (treeHeight.value === "" || treeCharacter.value === "") {
    alert("Both fields must have a value.");
  } else{
    assignValues()
  }
}

/********** HEIGHT OF TREE ************/
function assignValues() {
    var tree = {
      height: treeHeight.value,
      character: treeCharacter.value
    };
    growTree(tree);
  }

 function growTree(tree) {
    for (var i = 1; i <= tree.height; i++) {
      console.log(" ".repeat(tree.height - i) + tree.character.repeat((i * 2) - 1) + " ".repeat(tree.height - i))
    }
  }


// var space = " ";
// console.log(space + space + space + space + space + space + "*")
// console.log(space + space + space + space + space + "***")
// console.log(space + space + space + space + "*****")
// console.log(space + space + space + "*******")
// console.log(space + space + "*********")
// console.log(space + "***********")
// console.log("*************")


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
