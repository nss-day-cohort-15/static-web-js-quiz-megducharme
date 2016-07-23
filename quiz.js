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



for (var i = 0; i === treeHeight; i++) {
  var line = "      ";
    for (var j = 0; j === ((treeHeight * 2) - 1); j += 2) {
    var tree = line += " " + treeCharacter;
    }
}

console.log(tree);

