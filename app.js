const output = document.getElementById("output");
const button = document.querySelector(".btn");

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}


readTextFile("words_dictionary.json", function(text){
  data = JSON.parse(text);

});


function permut(valid_input) {
  if (valid_input.length < 2) return valid_input; 

  var permutations = []; 
  for (var i = 0; i < valid_input.length; i++) {
    var char = valid_input[i];

    if (valid_input.indexOf(char) != i)
      continue;

    var remainingString = valid_input.slice(0, i) + valid_input.slice(i + 1, valid_input.length);

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}

button.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  let permut_options = permut(input);
  const new_array = []
  console.log(permut_options)
  for(let i = 0; i < permut_options.length; i++) {
    if(data.hasOwnProperty(permut_options[i])) {
      new_array.push(permut_options[i])
    }
  }

  
  
  function addrain() {
    var myList = document.getElementById('listcontent');
    myList.innerHTML = '';
    for (var i = 0; i < new_array.length; i++) {

      var li = document.createElement('li');
          

      li.textContent = new_array[i];
  
      document.getElementById('listcontent').appendChild(li);
    }
  }
  if(new_array.length == 0) {
    var myList = document.getElementById('listcontent');
    myList.innerHTML = '';
    var li = document.createElement('li');
    li.textContent = "No solutions";
    document.getElementById('listcontent').appendChild(li);
  }
  else{
    addrain()
  }
})



