const courses = [
    {
        title: "Aproximación al sector de los drones: drónate (250h)",
        institution: "Cámara de Comercio de Gijón",
        description: [],
        date: "Diciembre 2023"
    },
    {
        title: "Python Essentials 2 (40h)",
        institution: "Cisco Networking Academy",
        description: [],
        date: "Abril 2024"
    },,
    {
        title: "Junior Cybersecurity Analyst Career Path (120h)",
        institution: "Cisco Networking Academy",
        description: [],
        date: "Agosto 2024"
    },
    {
        title: "Curso Básico de Ciberseguridad (15h)",
        institution: "CCN-CERT Centro Criptológico Nacional",
        description: [],
        date: "Septiembre 2024"
    },
    {
        title: "Esquema Nacional de Seguridad ENS (20h)",
        institution: "CCN-CERT Centro Criptológico Nacional",
        description: [],
        date: "Septiembre 2024"
    }
];

// Insertar los cursos en la página
const courseList = document.getElementById('course-list');

courses.forEach(course => {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('item');
    courseDiv.innerHTML = `
        <h3>${course.title}</h3>
        <h4>${course.institution}</h4>
        <p>${course.description.map(line => line).join("<br>")}</p>
        <div class="light">${course.date}</div>
    `;
    courseList.appendChild(courseDiv);
});
