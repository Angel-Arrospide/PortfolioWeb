// static/js/skills.js

// Array de habilidades
const skills = [
    { name: "Ciberseguridad", icon: "fa-solid fa-shield" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Java", icon: "fa-brands fa-java" },
    { name: "C/C++", icon: "fa-solid fa-c" },
    { name: "Bases de datos", icon: "fa-solid fa-database" },
    { name: "GNU/Linux", icon: "fa-brands fa-linux" }
];

// Función para crear la lista de habilidades
function createSkillsIconList(id_list) {
    const skillsList = document.getElementById(id_list);
    skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");
        skillItem.innerHTML = `<i class="${skill.icon}"></i> <span>${skill.name}</span>`;
        skillsList.appendChild(skillItem);
    });
}

// Llamar a la función para crear la lista
createSkillsIconList("skills-list-1");
createSkillsIconList("skills-list-2");
