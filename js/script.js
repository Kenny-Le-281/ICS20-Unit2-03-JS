/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

/**
 * This function gets users street number and name and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)
  
  // output
  document.getElementById("address").innerHTML =
    "<p>Your adress is: " + streetNumber + " " + streetName + ".</p>"
}
