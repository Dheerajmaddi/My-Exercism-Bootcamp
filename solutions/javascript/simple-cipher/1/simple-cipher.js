//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(cipherKey = '') {
    this.cipherKey = cipherKey;
  }

  // Generates an index based on a character (0 - 25)
  charIndex(inputText, index){
    return inputText[index % inputText.length].charCodeAt(0) - 97;
  }

  // Genrates a character based on the given index (a - z)
  generateCharFromIndex(index){
    return String.fromCharCode(index + 97);
  }
  
  
  encode(plainText) {
    if(/^a+$/.test(this.key)) return plainText;
    
    let cipherText = '';
    for (let index = 0; index < plainText.length; index++) {
      let keyCharIndex = this.charIndex(this.key, index);
      let plainCharIndex = this.charIndex(plainText, index);
      let cipherIndex = plainCharIndex + keyCharIndex;
      
      if (cipherIndex >= 26) cipherIndex -= 26;
      cipherText += this.generateCharFromIndex(cipherIndex);
    }
    return cipherText;
  }

  decode(cipherText) {
    let plainText = '';
    for (let index = 0; index < cipherText.length; index++) {
      let keyCharIndex = this.charIndex(this.key, index);
      let cipherCharIndex = this.charIndex(cipherText, index);
      let plainIndex = cipherCharIndex - keyCharIndex;
      
      if(plainIndex < 0) plainIndex += 26; 
      plainText += this.generateCharFromIndex(plainIndex);;
    }
    return plainText;
  }

  get key() {
    if(!this.cipherKey) this.generateKey();
    return this.cipherKey;
  }

  generateKey() {
    const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < 100; i++) {
      // Pick a random position in the alphabet string
      const randomIndex = Math.floor(Math.random() * ALPHABETS.length);
      this.cipherKey += ALPHABETS[randomIndex];
    }
    return this.cipherKey;
  }
}
