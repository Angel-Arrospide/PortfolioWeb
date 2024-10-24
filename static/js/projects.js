const projects = [
    {
        title: "Proyecto 1",
        description: "Descripción breve del proyecto 1. Es un sitio web para una tienda en línea."
    },
    {
        title: "Proyecto 2",
        description: "Descripción breve del proyecto 2. Es una aplicación móvil para gestión de tareas."
    },
    {
        title: "Proyecto 3",
        description: "Descripción breve del proyecto 3. Es una plataforma de blog personalizada."
    },
    {
        title: "Proyecto 4",
        description: "Descripción breve del proyecto 4. Es un portafolio interactivo con animaciones."
    },
    {
        title: "Proyecto 5",
        description: "Descripción breve del proyecto 5. Es una herramienta de análisis de datos."
    },
    {
        title: "Proyecto 6",
        description: "Descripción breve del proyecto 6. Es un juego en línea multijugador."
    }
];

// Insertar los proyectos en la página
const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(projectDiv);
});
