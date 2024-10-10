// script.js

// Scroll Animation: Add animation class when an element enters the viewport
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('animate');
        }
    });
});

// Modal for project details (example for one project)
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Event listener to show/hide modal
document.querySelector('.project-card').addEventListener('click', () => {
    modal.innerHTML = '<h3>Project 1 Details</h3><p>This is a detailed description of the project.</p>';
    modal.classList.add('active');
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});
