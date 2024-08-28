document.querySelector('.search-icon').addEventListener('click', function () {
    const searchTerm = document.querySelector('.search-input').value;
    alert('Searching for: ' + searchTerm);
});

const navItems = document.querySelectorAll('.border');
navItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.style.borderColor = '#ff9900';
    });
    item.addEventListener('mouseout', function () {
        item.style.borderColor = 'transparent';
    });
});

document.querySelector('.foot-panel1').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const seeMoreButtons = document.querySelectorAll('.box-content p');
seeMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
        alert('See more clicked for ' + button.previousElementSibling.previousElementSibling.textContent);
    });
});

document.querySelector('.hero-msg a').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Redirecting to Amazon India...');
    window.location.href = "https://www.amazon.in";
});
