import brunch from "/src/assets/images/brunch.jpg";
import dinner from "/src/assets/images/dinner.jpg";

export function buildHome(main) {
    // Welcome section
    const welcomeDiv = document.createElement("div");

    // Add Header
    welcomeDiv.appendChild(document.createElement("h2"));
    welcomeDiv.lastElementChild.textContent = "Welcome to The Hungry Fox!";

    const welcomeContent = document.createElement("div");
    welcomeContent.style.display = "flex";
    welcomeContent.style.alignItems = "center";
    welcomeContent.style.gap = "var(--gap)";

    // Add Image
    const welcomeImage = document.createElement("img");
    welcomeImage.src = brunch;
    welcomeContent.appendChild(welcomeImage);

    // Add Text
    welcomeContent.appendChild(document.createElement("p"));
    welcomeContent.lastElementChild.textContent = "The Hungry Fox is your neighborhood spot for satisfying meals made with care— whether stopping for a quick bite, meeting friends for lunch, or settling in for a cozy dinner. Our menu is built around familiar favorites prepared with fresh ingredients and a creative touch, served in a welcoming space that invites you to enjoy the moment.";

    welcomeDiv.appendChild(welcomeContent);

    // About section
    const aboutDiv = document.createElement("div");
    aboutDiv.style.marginTop = "10%";

    // Add Header
    aboutDiv.appendChild(document.createElement("h2"));
    aboutDiv.lastElementChild.textContent = "About Us";

    const aboutContent = document.createElement("div");
    aboutContent.style.display = "flex";
    aboutContent.style.alignItems = "center";
    aboutContent.style.gap = "var(--gap)";

    // Add Text
    aboutContent.appendChild(document.createElement("p"));
    aboutContent.lastElementChild.textContent = "At The Hungry Fox, we serve comfort food with a clever twist, combining familiar favorites with fresh ingredients and house-made recipes. Our goal is simple: create satisfying meals in a warm, welcoming space where everyone feels at home—whether you’re grabbing a quick lunch or settling in for dinner with friends.";

    // Add Image
    const aboutImage = document.createElement("img");
    aboutImage.src = dinner;
    aboutContent.appendChild(aboutImage);

    aboutDiv.appendChild(aboutContent);

    // Update the DOM
    main.appendChild(welcomeDiv);
    main.appendChild(aboutDiv);
};