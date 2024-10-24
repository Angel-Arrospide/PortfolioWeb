const experiences = [
    {
        title: "Desarrollador Frontend",
        description: "Trabajé en una empresa de software desarrollando interfaces de usuario interactivas utilizando React y JavaScript.",
        startDate: "Enero 2020",
        endDate: "Marzo 2022"
    },
    {
        title: "Ingeniero de Software",
        description: "Fui responsable del desarrollo de aplicaciones móviles con Flutter y optimización de bases de datos en SQL.",
        startDate: "Abril 2022",
        endDate: "Presente"
    },
    {
        title: "Practicante en Desarrollo Web",
        description: "Me enfoqué en mejorar el diseño y la accesibilidad de sitios web, trabajando principalmente con HTML, CSS, y JavaScript.",
        startDate: "Junio 2019",
        endDate: "Diciembre 2019"
    }
];

// Insertar las experiencias en la página
const experienceList = document.getElementById('experience-list');

experiences.forEach(experience => {
    const experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-item');
    experienceDiv.innerHTML = `
        <h3>${experience.title}</h3>
        <p>${experience.description}</p>
        <div class="experience-date">${experience.startDate} - ${experience.endDate}</div>
    `;
    experienceList.appendChild(experienceDiv);
});
