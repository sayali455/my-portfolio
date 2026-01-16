function addRecommendation() {
    // Get text from textarea
    const recommendationText = document.getElementById("new_recommendation").value;

    // Validate empty input
    if (recommendationText.trim() === "") {
        alert("Please enter a recommendation.");
        return;
    }

    // Create a new paragraph element
    const newRecommendation = document.createElement("p");
    newRecommendation.className = "recommendation";
    newRecommendation.textContent = recommendationText;

    // Add recommendation to the list
    document.getElementById("recommendations").appendChild(newRecommendation);

    // Clear textarea after adding
    document.getElementById("new_recommendation").value = "";
    showPopup(true);

}


function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
