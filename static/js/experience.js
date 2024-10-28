const experiences = [
    {
        title: "Becario de Informática",
        company: "Cátedra CASTROALONSO de Ciberseguridad y entorno digital",
        description: "Desarrollo en solitario de una aplicación web usando varias tecnologías como python, HTML, CSS y JS",
        dates: "Mayo 2024 - Octubre 2024 (6 meses)"
    }
];

// Insertar las experiencias en la página
const experienceList = document.getElementById('experience-list');

experiences.forEach(experience => {
    const experienceDiv = document.createElement('div');
    experienceDiv.classList.add('item');
    experienceDiv.innerHTML = `
        <h3>${experience.title}</h3>
        <h4>${experience.company}</h4>
        <p>${experience.description}</p>
        <div class="light">${experience.dates}</div>
    `;
    experienceList.appendChild(experienceDiv);
});
