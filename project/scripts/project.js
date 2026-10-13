// Naija Food Guide - Main JavaScript

// Update the copyright year
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Nigerian dishes and their characteristics
const dishes = [
    {
        name: "Jollof Rice",
        category: "rice",
        meals: ["lunch", "dinner"],
        spice: ["medium", "hot"],
        image: "images/jollof-rice.JPG",
        description:
            "A beloved West African rice dish cooked in a rich tomato and pepper sauce."
    },
    {
        name: "Egusi Soup",
        category: "soup",
        meals: ["lunch", "dinner"],
        spice: ["medium", "hot"],
        image: "images/egusi-soup.JPG",
        description:
            "A hearty Nigerian soup made with ground melon seeds, leafy vegetables, and seasonings."
    },
    {
        name: "Pounded Yam",
        category: "soup",
        meals: ["lunch", "dinner"],
        spice: ["mild", "medium", "hot"],
        image: "images/pounded-yam.JPG",
        description:
            "A smooth, stretchy swallow commonly enjoyed with rich Nigerian soups."
    },
    {
        name: "Suya",
        category: "protein",
        meals: ["lunch", "dinner", "snack"],
        spice: ["medium", "hot"],
        image: "images/suya.JPG",
        description:
            "Spiced grilled meat coated in a flavourful peanut-based seasoning."
    },
    {
        name: "Moi Moi",
        category: "street-food",
        meals: ["breakfast", "lunch"],
        spice: ["mild", "medium"],
        image: "images/moi-moi.JPG",
        description:
            "A savoury steamed bean pudding made with blended beans, peppers, and seasonings."
    },
    {
        name: "Akara",
        category: "street-food",
        meals: ["breakfast", "snack"],
        spice: ["mild", "medium"],
        image: "images/akara.JPG",
        description:
            "Crispy Nigerian bean fritters that are especially popular for breakfast."
    }
];

// Find the Food Finder form and results area
const foodFinderForm = document.querySelector("#food-finder-form");
const finderResults = document.querySelector("#finder-results");

// Display the matching dishes
function displayDishes(matchingDishes) {
    finderResults.replaceChildren();

    if (matchingDishes.length === 0) {
        const message = document.createElement("p");
        message.textContent =
            "No dishes match all your choices. Try changing one or more preferences.";
        finderResults.appendChild(message);
        return;
    }

    const heading = document.createElement("h2");
    heading.textContent =
        matchingDishes.length === 1
            ? "Your Dish Recommendation"
            : "Here Are Your Dish Recommendations";

    finderResults.appendChild(heading);

    matchingDishes.forEach(function (dish) {
        const card = document.createElement("article");
        card.classList.add("dish-result");

        if (dish.image) {
            const image = document.createElement("img");
            image.src = dish.image;
            image.alt = dish.name;
            image.loading = "lazy";
            card.appendChild(image);
        }

        const title = document.createElement("h3");
        title.textContent = dish.name;

        const description = document.createElement("p");
        description.textContent = dish.description;

        card.append(title, description);
        finderResults.appendChild(card);
    });
}

// Filter dishes according to the visitor's preferences
if (foodFinderForm && finderResults) {
    foodFinderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedCategory =
            document.querySelector("#food-category").value;

        const selectedMeal =
            document.querySelector("#food-meal").value;

        const selectedSpice =
            document.querySelector("#food-spice").value;

        const matchingDishes = dishes.filter(function (dish) {
            const categoryMatches =
                selectedCategory === "all" ||
                dish.category === selectedCategory;

            const mealMatches =
                selectedMeal === "all" ||
                dish.meals.includes(selectedMeal);

            const spiceMatches =
                selectedSpice === "all" ||
                dish.spice.includes(selectedSpice);

            return categoryMatches && mealMatches && spiceMatches;
        });

        displayDishes(matchingDishes);
    });
}