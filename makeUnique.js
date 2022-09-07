// // Write your solution below:
//This is a function to remove duplicate letters from a string 

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('baraban'));

  //____________________________________________________

  const makeUnique = (string) => {
    let arr = string.split('')
    let uniqueArray = []
    for(i = 0; i < arr.length; i++){
      if(!uniqueArray.includes(arr[i])){
        uniqueArray.push(arr[i])
      }
    }
    return uniqueArray.join('')
  }
  
  console.log(makeUnique('helloworld'))

  //__________________________________________________________

  let removeDuplicate = (string) => string.split("").reduce((s, c) => {
    if (s) {
     if (s.indexOf(c) === -1) return s + c;
    }
    return s;
  });
 
  console.log(removeDuplicate("helloworld"));