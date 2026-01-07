import restaurant from "/src/assets/images/restaurant.jpg";


export function buildContact(main) {
    // Location section
    // Add Header
    main.appendChild(document.createElement("h2"));
    main.lastElementChild.textContent = "Contact us at our home location:";

    const locationDiv = document.createElement("div");
    locationDiv.style.display = "flex";
    locationDiv.style.justifyContent = "space-around";
    locationDiv.style.alignItems = "center";

    // Add Image
    const restaurantImage = document.createElement("img");
    restaurantImage.src = restaurant;
    locationDiv.appendChild(restaurantImage);

    const locationContent = document.createElement("div");

    // Add Address
    locationContent.appendChild(document.createElement("p"));
    locationContent.lastElementChild.innerHTML = "Location:<br>123 Main St<br>Chicago, IL 60602";

    // Add Phone
    locationContent.appendChild(document.createElement("p"));
    locationContent.lastElementChild.textContent = "Phone: (888) 301-6212";
    locationContent.lastElementChild.style.margin = "var(--gap) 0px"

    // Add Hours
    locationContent.appendChild(document.createElement("p"));
    locationContent.lastElementChild.innerHTML = "Hours:<br>M - F: 8am - 10pm<br>Sat: 9am - 10pm<br>Sun: 11am - 6pm";

    // Update DOM
    locationDiv.appendChild(locationContent);
    main.appendChild(locationDiv);
};