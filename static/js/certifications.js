const certifications = [
    {
        title: "Certificado en Desarrollo Web",
        description: "Curso de Desarrollo Web completo donde aprendí HTML, CSS, JavaScript y frameworks modernos.",
        date: "Agosto 2020"
    },
    {
        title: "Certificado en Data Science",
        description: "Certificación obtenida tras completar un curso intensivo sobre análisis de datos y machine learning.",
        date: "Mayo 2021"
    },
    {
        title: "Certificado en Gestión de Proyectos Ágiles",
        description: "Certificación en gestión de proyectos siguiendo metodologías ágiles como Scrum y Kanban.",
        date: "Enero 2022"
    }
];

// Insertar las certificaciones en la página
const certificationList = document.getElementById('certification-list');

certifications.forEach(certification => {
    const certificationDiv = document.createElement('div');
    certificationDiv.classList.add('certification-item');
    certificationDiv.innerHTML = `
        <h3>${certification.title}</h3>
        <p>${certification.description}</p>
        <div class="certification-date">${certification.date}</div>
    `;
    certificationList.appendChild(certificationDiv);
});
