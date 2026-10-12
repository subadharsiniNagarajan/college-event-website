

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // REGISTRATION FORM
    // =====================================

    const form = document.getElementById("registrationForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const selectedEvent = document.getElementById("event").value;
            const message = document.getElementById("message").value.trim();

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const phoneError = document.getElementById("phoneError");
            const eventError = document.getElementById("eventError");

            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            eventError.textContent = "";

            let isValid = true;

            if (name === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                emailError.textContent = "Please enter your email.";
                isValid = false;
            } else if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            const phonePattern = /^[0-9]{10}$/;

            if (phone === "") {
                phoneError.textContent = "Please enter your phone number.";
                isValid = false;
            } else if (!phonePattern.test(phone)) {
                phoneError.textContent = "Phone number must contain 10 digits.";
                isValid = false;
            }

            if (selectedEvent === "") {
                eventError.textContent = "Please select an event.";
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            document.getElementById("previewName").textContent = name;
            document.getElementById("previewEmail").textContent = email;
            document.getElementById("previewPhone").textContent = phone;
            document.getElementById("previewEvent").textContent = selectedEvent;
            document.getElementById("previewMessage").textContent =
                message || "No message provided.";

            const successMessage =
                document.getElementById("successMessage");

            successMessage.style.display = "block";

            successMessage.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    // =====================================
    // FAVOURITE EVENTS
    // =====================================

    const favoriteButtons =
        document.querySelectorAll(".favorite-btn");

    let favorites =
        JSON.parse(localStorage.getItem("favoriteEvents")) || [];


    function updateFavoriteButtons() {

        favoriteButtons.forEach(function (button) {

            const eventName =
                button.getAttribute("data-event");

            if (favorites.includes(eventName)) {

                button.textContent =
                    "♥ Remove from Favourites";

                button.classList.add("favorited");

            } else {

                button.textContent =
                    "♡ Add to Favourites";

                button.classList.remove("favorited");

            }

        });

    }


    favoriteButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const eventName =
                button.getAttribute("data-event");


            if (favorites.includes(eventName)) {

                favorites = favorites.filter(function (event) {
                    return event !== eventName;
                });

            } else {

                favorites.push(eventName);

            }


            localStorage.setItem(
                "favoriteEvents",
                JSON.stringify(favorites)
            );


            updateFavoriteButtons();

        });

    });


    // Restore saved favourites
    updateFavoriteButtons();
const clearFavorites = document.getElementById("clearFavorites");

if (clearFavorites) {

    clearFavorites.addEventListener("click", function () {

        favorites = [];

        localStorage.removeItem("favoriteEvents");

        updateFavoriteButtons();

    });
// =====================================
    // SEARCH AND CATEGORY FILTER
    // =====================================

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const resetFilter = document.getElementById("resetFilter");
    const resultCount = document.getElementById("resultCount");

    const eventCards = document.querySelectorAll(".event-card");

    function filterEvents() {

        const searchText = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;

        let visibleCount = 0;

        eventCards.forEach(function (card) {

            const eventName =
                card.querySelector("h3").textContent.toLowerCase();

            const categoryText =
                card.querySelector("p").textContent;

            const category =
                categoryText.replace("Category:", "").trim();

            const matchesSearch =
                eventName.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;

            if (matchesSearch && matchesCategory) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });

        resultCount.textContent =
            "Showing " + visibleCount + " events";
    }

    if (searchInput && categoryFilter) {

        searchInput.addEventListener("input", filterEvents);

        categoryFilter.addEventListener("change", filterEvents);

        resetFilter.addEventListener("click", function () {

            searchInput.value = "";
            categoryFilter.value = "all";

            filterEvents();

        });

    }
}
});