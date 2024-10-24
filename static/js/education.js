const educationList = [
    {
        title: "Licenciatura en Ingeniería Informática",
        description: "Estudié en la Universidad de Tecnología, donde me especialicé en desarrollo de software y sistemas de información.",
        startDate: "Septiembre 2015",
        endDate: "Junio 2019"
    },
    {
        title: "Máster en Inteligencia Artificial",
        description: "Completé un máster en IA enfocado en el aprendizaje automático y redes neuronales en la Universidad de Ciencias Computacionales.",
        startDate: "Septiembre 2019",
        endDate: "Junio 2021"
    },
    {
        title: "Diploma en Ciencias de Datos",
        description: "Un curso intensivo en análisis de datos, estadística avanzada y visualización de datos, impartido por el Instituto de Ciencias de Datos.",
        startDate: "Julio 2021",
        endDate: "Diciembre 2021"
    }
];

// Insertar los elementos de educación en la página
const educationContainer = document.getElementById('education-list');

educationList.forEach(education => {
    const educationDiv = document.createElement('div');
    educationDiv.classList.add('education-item');
    educationDiv.innerHTML = `
        <h3>${education.title}</h3>
        <p>${education.description}</p>
        <div class="education-date">${education.startDate} - ${education.endDate}</div>
    `;
    educationContainer.appendChild(educationDiv);
});
