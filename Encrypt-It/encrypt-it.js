/*
 * Starter file 
 */

(function() {
  "use strict";
  
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  
  
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    
    document.getElementById("encrypt-it").addEventListener("click", encryptText);
    document.getElementById("reset").addEventListener("click", reset)

    console.log("Window loaded.");
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  // Encryption

  function encryptText()
{

    var inputText = document.getElementById("input-text");
    var encryptionType = document.getElementById("cipher-type").value;
    var plainText = inputText.value;
    var encryptedText;

    if (encryptionType == "shift")
    {
      encryptedText = shiftCipher(plainText);
    }
    else if (encryptionType == "random")
    {
      encryptedText = randomized(plainText);
    }
    document.getElementById("result").innerHTML = encryptedText;

    if (document.getElementById("12pt font").checked)
    {
      document.getElementById("result").style.fontSize = "12pt";
    }
  
    if (document.getElementById("24pt font").checked)
    {
      document.getElementById("result").style.fontSize = "24pt";
    }

    if (document.getElementById("all-caps").checked)
    {
      document.getElementById("result").innerHTML = encryptedText.toUpperCase();
    }

  

}

// ShiftCipher

function shiftCipher(text)
{
  text = text.toLowerCase();
  let result = "";

  for (let i = 0; i < text.length; i++)
  {
    if (text[i] < 'a' || text[i] > 'z')
    {
      result += text[i];
    }
    else if (text[i] == 'z')
    {
      result += 'a';
    }
    else 
    {
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}

// Randomized

function randomized(text)
{
  text = text.toLowerCase();
  let result = "";

  for (let i = 0; i < text.length; i++)
  {
      let letter = text.charAt(i);
      let max = text.length - 1;
      let min = 1;
      letter = text.charAt(Math.floor(Math.random() * (max - min + 1) + min));
      result += letter;
  }
  return result;
}

// Reset

function reset()
{

  var inputText = document.getElementById("input-text");
  inputText.value = "";
  inputText.placeholder = "Enter your message to be encrypted here";

  document.getElementById("cipher-type").value = "shift";

  document.getElementById("12pt font").checked = true;
  document.getElementById("24pt font").checked = false;

  document.getElementById("all-caps").checked = false;

  document.getElementById("result").innerHTML = "";
}
  
})();



