class Formatter {
  

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^ A-Za-z0-9-']+/g, '')
  }

  static titleize(string){
    // array of exception words
    let dontCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // new array
    let results = []
    // make 'string' into array
    let stringArray = string.split(' ')

    // for loop through string array
    for (let i = 0; i < stringArray.length; i++){
      // if on first element, always capitilize and push into new array,
      if (i == 0){
        results.push( this.capitalize(stringArray[i]) )
      } else {  // if not first element
         // check if word is in array of exceptions
        if (dontCaps.includes(stringArray[i])){ // if it is, then push into new array withouth caps
          results.push(stringArray[i])
        } else { // if not, then capitilize and push into new array
          results.push( this.capitalize(stringArray[i]))
        }
      }
    }
    return results.join(' ') // return new array as new string
  }
}
