document.addEventListener("DOMContentLoaded", function() {
    // Select all read more links
    var readMoreLinks = document.querySelectorAll(".read-more");

    // Add click event listener to each read more link
    readMoreLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Toggle visibility of the extra content
            var content = this.parentNode.querySelector(".extra-content");
            if (content) {
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block";
                    this.textContent = "Read Less";
                } else {
                    content.style.display = "none";
                    this.textContent = "Read More";
                }
            }
        });
    });
});
