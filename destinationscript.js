// Function to add favorite destination
function addFavorite() {
    var destination = document.getElementById("searchInput").value.trim();

    if (destination !== "") {
        var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(destination);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        displayFavorites();
    } else {
        alert("Please enter a destination.");
    }
}

// Function to display favorite destinations
function displayFavorites() {
    var favoritesContainer = document.getElementById("favoritesContainer");
    favoritesContainer.innerHTML = "";

    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length > 0) {
        favorites.forEach(function (destination, index) {
            var listItem = document.createElement("li");
            listItem.textContent = destination;
            
            // Edit button
            var editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", function () {
                var newDestination = prompt("Enter new destination:");
                if (newDestination && newDestination.trim() !== "") {
                    favorites[index] = newDestination.trim();
                    localStorage.setItem("favorites", JSON.stringify(favorites));
                    displayFavorites();
                }
            });
                        // Delete button
                        var deleteButton = document.createElement("button");
                        deleteButton.textContent = "Delete";
                        deleteButton.addEventListener("click", function () {
                            favorites.splice(index, 1);
                            localStorage.setItem("favorites", JSON.stringify(favorites));
                            displayFavorites();
                        });
            
                        listItem.appendChild(editButton);
                        listItem.appendChild(deleteButton);
                        favoritesContainer.appendChild(listItem);
                    });
                } else {
                    favoritesContainer.innerHTML = "<p>No favorite destinations found.</p>";
                }
            }
            
            // Initial display of favorite destinations
            displayFavorites();
            
