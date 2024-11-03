const certifications = [
    {
        title: "First Certificate in English (B2)",
        institution: "Cambridge University Press & Assessment",
        date: "Octubre 2021"
    },
    {
        title: "Piloto de UAS <br> Categoría abierta A1 y A3",
        institution: "AESA - Agencia Estatal de Seguridad Aérea",
        date: "Agosto 2024"
    },
    {
        title: "Advanced Certificate in English (C1)",
        institution: "Cambridge University Press & Assessment",
        date: "Octubre 2024"
    }
];

// Insertar las certificaciones en la página
const certificationList = document.getElementById('certification-list');

certifications.forEach(certification => {
    const certificationDiv = document.createElement('div');
    certificationDiv.classList.add('item');
    certificationDiv.innerHTML = `
        <h3>${certification.title}</h3>
        <h4>${certification.institution}<h4>
        <div class="light">${certification.date}</div>
    `;
    certificationList.appendChild(certificationDiv);
});
