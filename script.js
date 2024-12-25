<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Select all anchor links with a hash (#) in the href
        const links = document.querySelectorAll('a[href^="#"]');

        // Add event listeners for smooth scrolling
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                // Ignore links that navigate to a different page
                if (!this.getAttribute('href').startsWith('#')) return;

                // Get the target section's ID from the href attribute
                const targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault(); // Prevent the default link behavior

                    // Scroll smoothly to the target section
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
</script>
