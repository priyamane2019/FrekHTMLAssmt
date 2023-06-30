const links = document.querySelectorAll('.navlink');
const contentSections = document.querySelectorAll('.content-section');

links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove 'active' class from all content sections
    contentSections.forEach(section => {
      section.classList.remove('active');
    });

    // Add 'active' class to the selected content section
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('active');
  });
});
