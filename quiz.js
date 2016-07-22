console.log("hi");



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



// /* Looping through fields to check if they are populated */
// var inputfield = document.querySelectorALL ("inputfield")
// for (var = 1; i = 2; i++) {
//   inputfield[i].addEventListener()
// }
