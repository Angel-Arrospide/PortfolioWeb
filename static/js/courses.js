const courses = [
    {
        title: "Aproximación al sector de los drones: drónate (250h)",
        institution: "Cámara de Comercio de Gijón",
        description: [
            "El curso aborda aplicaciones futuras de drones y principios de aeronaves pilotadas por control remoto.",
            "También incluye metodología de vuelo, navegación aérea, legislación y factores humanos en la operación de RPAs."
        ],
        date: "Diciembre 2023"
    },
    {
        title: "Python Essentials 2 (40h)",
        institution: "Cisco Networking Academy",
        description: [
            "Abarca programación orientada a objetos, incluyendo clases, métodos y herencia; así como generadores, polimorfismo y excepciones.",
            "También se centra en la gestión de paquetes y módulos mediante PIP y la creación de paquetes e iniciadores en Python."
        ],
        date: "Abril 2024"
    },,
    {
        title: "Junior Cybersecurity Analyst Career Path (120h)",
        institution: "Cisco Networking Academy",
        description: [
            "El programa cubre los fundamentos de ciberseguridad, la identificación de amenazas y el monitoreo de redes.",
            "También incluye el uso de herramientas como firewalls y VPNs, así como principios de respuesta a incidentes y cumplimiento normativo."
        ],
        date: "Agosto 2024"
    },
    {
        title: "Curso Básico de Ciberseguridad (15h)",
        institution: "CCN-CERT Centro Criptológico Nacional",
        description: [
            "Cubre fundamentos de ciberseguridad y las principales amenazas en el entorno digital.",
            "También aborda medidas de protección, buenas prácticas y herramientas para la gestión de incidentes de seguridad."
        ],
        date: "Septiembre 2024"
    },
    {
        title: "Esquema Nacional de Seguridad ENS (20h)",
        institution: "CCN-CERT Centro Criptológico Nacional",
        description: [
            "aborda los principios y requisitos para garantizar la seguridad de la información en el ámbito público.",
            "Incluye la gestión de riesgos, la protección de datos y la implementación de medidas de seguridad adecuadas."
        ],
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
