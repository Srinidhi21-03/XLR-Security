// Sample data for projects (replace with your actual projects)
const projects = [
    {
        title: "Commercial Security",
        image: "images/project2.jpg",
        description: "Completed in April 2024"
    },
    {
        title: "Smart Home Integration",
        image: "images/project3.jpg",
        description: "Completed in June 2024"
    }
];

// Function to generate project cards
function loadProjects() {
    const gallery = document.getElementById('project-gallery');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        gallery.querySelector('.project-grid').appendChild(card);
    });
}

// Load projects when page loads
window.addEventListener('DOMContentLoaded', loadProjects);