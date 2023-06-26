// Add active class to nav links on click
const navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            const currentLink = document.querySelector('.active');
            if (currentLink) {
                currentLink.classList.remove('active');
            }
            
        } 
    }
