const educationList = [
    {
        title: "Prueba de evaluación de bachillerato para el acceso a la universidad (EBAU)",
        institution: " I.E.S. Calderón de la Barca | Universidad de Oviedo",
        description: [
            "Nota en la fase de acceso: 9,416 / 10",
            "Nota en la fase de admisión: 13,116  / 14",
        ],
        dates: "Junio 2022",
    },
    {
        title: "Grado en Ingeniería Informática en Tecnologías de la Información",
        institution: "Escuela Politécnica de Ingeniería de Gijón (Universidad de Oviedo)",
        description: [
            "Cursado en programa bilingue español-inglés",
            "Nota media: 8,12",
            "Reconocimientos: 3 matrículas de honor y 3 sobresalientes"
        ],
        dates: "Septiembre 2022 - Junio 2026 (esperado)",
    }
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

