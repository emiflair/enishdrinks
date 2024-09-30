document.addEventListener("DOMContentLoaded", function() {
    const promoPopup = document.getElementById("promo-popup");
    const closeBtn = document.querySelector(".close-btn");
    const promoText = document.getElementById("promo-text");

    const promos = {
        "Monday": "Unplugged Monday: Happy hour 4pm - 11pm!",
        "Tuesday": "Tuesday Ladies Night: Two Free Drinks Happy Hour 4pm - 11pm!",
        "Wednesday": "Wednesday Rhythm Night: Happy hour 4pm - 11pm!",
        "Thursday": "Thursday Eko Night: Happy hour 4pm - 11pm!!",
        "Friday": "Lalale Friday: Happy hour 4pm - 11pm!!",
        "Saturday": "Saturday Afrobeats Night: Happy hour 4pm - 11pm!!",
        "Sunday": "Blackout Sunday: Happy hour 4pm - 11pm!!"
    };

    const typingDelay = 100; // Typing delay in milliseconds

    function typeText(text) {
        let index = 0;
        const typingInterval = setInterval(function() {
            promoText.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(typingInterval);
            }
        }, typingDelay);
    }

    function showPromo() {
        const today = new Date();
        const currentHour = today.getHours(); // Get the current hour
        let promoDay;

        if (currentHour < 4) {
            // If it's before 4 AM, show the promo for the previous day
            today.setDate(today.getDate() - 1); // Go to the previous day
        }
        
        // Get the day of the week
        promoDay = today.toLocaleString('en-us', { weekday: 'long' });

        if (promos[promoDay]) {
            promoPopup.classList.add("show"); // Apply the "show" class for fade-in effect
            promoPopup.style.display = "block"; // Make the popup visible
            promoText.textContent = ""; // Clear previous text
            typeText(promos[promoDay]); // Start typing the promo text
        }
    }

    closeBtn.addEventListener("click", function() {
        promoPopup.style.display = "none"; // Hide the popup when close button is clicked
    });

    // Automatically show the promo popup after 10 seconds
    setTimeout(function() {
        showPromo(); // Trigger the promo popup
    }, 10000);
});
