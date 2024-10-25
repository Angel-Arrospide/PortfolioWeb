const projects = [
    {
        title: "Portfolio personal",
        description: "Versión web detallada de mi Curriculum Vitae"
    }
];

// Insertar los proyectos en la página
const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('item');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(projectDiv);
});
