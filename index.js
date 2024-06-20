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

    const typingDelay = 100; // Adjust typing delay (milliseconds)

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
        const today = new Date().toLocaleString('en-us', { weekday: 'long' });
        if (promos[today]) {
            promoPopup.style.display = "block"; // Show the popup
            typeText(promos[today]); // Start typing out the text
        }
    }

    closeBtn.addEventListener("click", function() {
        promoPopup.style.display = "none";
    });

    // Show the promo popup automatically
    setTimeout(function() {
        showPromo(); // Start the loop
    }, 10000);
});

