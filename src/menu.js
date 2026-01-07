export function buildMenu(main) {
    // Add a menu grid
    const menu = document.createElement("div");
    menu.style.display = "grid";
    menu.style.gridTemplateColumns = "repeat(2, 1fr)";
    menu.style.alignItems = "center";
    menu.style.gap = "var(--gap)";

    // Add Specials, style, then duplicate for the rest
    const specials = document.createElement("div");
    specials.style.display = "flex";
    specials.style.flexDirection = "column";
    specials.style.gap = "var(--gap)";
    specials.appendChild(document.createElement("h2"));
    specials.lastElementChild.textContent = "Specials";

    const breakfast = specials.cloneNode(true);
    breakfast.lastElementChild.textContent = "Breakfast";

    const lunch = specials.cloneNode(true);
    lunch.lastElementChild.textContent = "Lunch";

    const dinner = specials.cloneNode(true);
    dinner.lastElementChild.textContent = "Dinner";

    // Add meals 
    specials.appendChild(addMeal("Sunrise Delight", "$12", "Fluffy pancakes stacked high with caramelized bananas, toasted almonds, and a drizzle of maple syrup."));
    specials.appendChild(addMeal("Twilight Feast", "$18", "Herb-roasted chicken with garlic mashed potatoes and seasonal roasted veggies, finished with a balsamic glaze."));
    specials.appendChild(addMeal("Mediterranean Feast", "$19", "Grilled lamb skewers with roasted vegetables, couscous, and a refreshing tzatziki sauce."));
  
    breakfast.appendChild(addMeal("Garden Omelette", "$10", "Three-egg omelette with spinach, mushrooms, tomatoes, and cheddar cheese, served with toast."));
    breakfast.appendChild(addMeal("Avocado Toast", "$9", "Sourdough topped with smashed avocado, radishes, microgreens, and a sprinkle of chili flakes."));
    breakfast.appendChild(addMeal("Berry Smoothie Bowl", "$11", "Mixed berry smoothie topped with granola, coconut flakes, and fresh kiwi slices."));
    
    lunch.appendChild(addMeal("Crispy Chicken Sandwich", "$13", "Buttermilk fried chicken, lettuce, tomato, pickles, and aioli on a brioche bun."));
    lunch.appendChild(addMeal("Quinoa Power Bowl", "$12", "Quinoa, roasted sweet potatoes, black beans, avocado, and a lemon-tahini dressing."));
    lunch.appendChild(addMeal("Classic Cheeseburger", "$14", "Grass-fed beef, cheddar, lettuce, tomato, pickles, served with house fries."));
    lunch.appendChild(addMeal("Caprese Panini", "$12", "Fresh mozzarella, tomatoes, basil pesto, and balsamic reduction pressed on ciabatta."));
   
    dinner.appendChild(addMeal("Seared Salmon", "$20", "Pan-seared salmon with garlic butter, herbed rice, and sautéed green beans."));
    dinner.appendChild(addMeal("Steak Frites", "$25", "Grilled sirloin with rosemary fries and a side of peppercorn sauce."));
    dinner.appendChild(addMeal("Veggie Lasagna", "$18", "Layers of roasted vegetables, ricotta, and marinara, baked to perfection."));
    dinner.appendChild(addMeal("Shrimp Tacos", "$17", "Spicy grilled shrimp with cabbage slaw, avocado crema, and cilantro-lime rice."));
   
    // Update the DOM
    menu.appendChild(specials);
    menu.appendChild(breakfast);
    menu.appendChild(lunch);
    menu.appendChild(dinner);
    main.appendChild(menu);

    // Adds a meal, given the name, cost and description
    function addMeal(name, cost, description) {
        const meal = document.createElement("div");
        const mealTitle = document.createElement("div");
        mealTitle.style.display = "flex";
        mealTitle.style.justifyContent = "space-between";

        const mealName = document.createElement("span");
        mealName.textContent = name;

        const mealCost = document.createElement("span");
        mealCost.textContent = cost

        const mealDescription = document.createElement("span");
        mealDescription.textContent = description;

        mealTitle.appendChild(mealName);
        mealTitle.appendChild(mealCost);
        meal.appendChild(mealTitle);
        meal.appendChild(mealDescription);

        return meal;
    }
};