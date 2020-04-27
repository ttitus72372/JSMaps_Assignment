
function namesList(){
  let nameList = [];
  let numOfNames = parseInt(document.getElementById("number").value);
  let z = 1;
  while (z <= numOfNames){
    let name_input = prompt("Please enter a name.");
    nameList.push(name_input);
    z++;
  }
  
  let capName = nameList.map(function(name){
    let cN = name.charAt(0).toUpperCase() + name.slice(1);
    return cN
  })

  for(i=0;i<nameList.length;i++){
    document.getElementById('output1').innerHTML += nameList[i]
  }
  
  for(i=0;i<capName.length;i++){
    document.getElementById('caps').innerHTML += capName[i]
  }

}
