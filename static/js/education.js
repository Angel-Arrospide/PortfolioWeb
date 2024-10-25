const educationList = [
    {
        title: "Grado en Ingeniería Informática en Tecnologías de la Información",
        institution: "Escuela Politécnica de Ingeniería de Gijón | Universidad de Oviedo",
        description: [
            "Cursado en programa bilingue español-inglés",
            "Nota media: 8,12",
            "Reconocimientos: 3 matrículas de honor y 3 sobresalientes"
        ],
        dates: "Septiembre 2015 - Junio 2019",
    },
    // Puedes añadir más objetos de educación aquí
];

// Insertar los elementos de educación en la página
const educationContainer = document.getElementById('education-list');

educationList.forEach(education => {
    const educationDiv = document.createElement('div');
    educationDiv.classList.add('item');
    educationDiv.innerHTML = `
        <h3>${education.title}</h3>
        <h4>${education.institution}</h4>
        <p>${education.description.map(i => i).join("<br>")}</p>
        <div class="light">${education.dates}</div>
    `;
    educationContainer.appendChild(educationDiv);
});

