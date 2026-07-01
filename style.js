const mobileMenuIcon = document.getElementById('mobil');
const navList = document.querySelector('.navbar ul');

mobileMenuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});