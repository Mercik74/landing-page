// Colores para el fondo
const colors = ["#c0c3feff", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffd6cc", "#e6ccff"];
let colorIndex = 0;

// Datos de los integrantes
const members = [
    { 
        photo: "img/angel.jpeg", 
        desc: "Jose Angel Navarro Flores - Conocido como Juanito Manolo, bautizado por luis lao." 
    },
    { 
        photo: "img/erick.jpg", 
        desc: "Erick Martin Morin Lopez - Conocido como  Querick, no le sabe a los querys" 
    }
];
let memberIndex = 0;

// Variable para el tema
let isDarkTheme = false;

// Función para detectar la preferencia del sistema
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}


// Función para aplicar el tema inicial
function setInitialTheme() {
    const systemTheme = detectSystemTheme();
    const body = document.body;
    const button = document.getElementById("themeButton");
    
    if (systemTheme === 'dark') {
        body.classList.add("dark-theme");
        button.textContent = "Modo Claro";
        isDarkTheme = true;
    } else {
        body.classList.remove("dark-theme");
        button.textContent = "Modo Oscuro";
        isDarkTheme = false;
    }
}

// Función para actualizar el reloj
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 debe ser 12
    hours = hours.toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
}

// Función para actualizar el texto del botón
function updateSwitchButtonText() {
    const switchButton = document.getElementById('switchButton');
    if (memberIndex === 0) {
        switchButton.textContent = 'Mostrar Alumno 2';
    } else {
        switchButton.textContent = 'Mostrar Alumno 1';
    }
}


// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 1000); // Actualizar cada segundo
    updateSwitchButtonText(); // Inicializar el texto del botón
    setInitialTheme(); // Establecer tema inicial basado en preferencias del sistema
});

// Botón cambio de color
document.getElementById("colorButton").addEventListener("click", () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    
    // Efecto visual en el botón
    const button = document.getElementById("colorButton");
    button.classList.add("bounce");
    setTimeout(() => button.classList.remove("bounce"), 1000);
}); 

// Botón cambio de integrante
document.getElementById("switchButton").addEventListener("click", () => {
    memberIndex = (memberIndex + 1) % members.length;
    
    const memberPhoto = document.getElementById("member-photo");
    const memberDesc = document.getElementById("member-desc");
    
    // Efecto de transición
    memberPhoto.style.opacity = "0";
    memberDesc.style.opacity = "0";
    
    setTimeout(() => {
        memberPhoto.src = members[memberIndex].photo;
        memberPhoto.alt = `Foto Alumno ${memberIndex + 1}`;
        memberDesc.textContent = members[memberIndex].desc;
        memberPhoto.style.opacity = "1";
        memberDesc.style.opacity = "1";
        
        // Actualizar el texto del botón después del cambio
        updateSwitchButtonText();
    }, 200);
    
    // Efecto visual en el botón
    const button = document.getElementById("switchButton");
    button.classList.add("bounce");
    setTimeout(() => button.classList.remove("bounce"), 1000);
});

// Botón cambio de tema (modo oscuro/claro)
document.getElementById("themeButton").addEventListener("click", () => {
    const body = document.body;
    const button = document.getElementById("themeButton");
    
    if (isDarkTheme) {
        body.classList.remove("dark-theme");
        button.textContent = "Modo Oscuro";
        isDarkTheme = false;
    } else {
        body.classList.add("dark-theme");
        button.textContent = "Modo Claro";
        isDarkTheme = true;
    }
    
    // Efecto visual en el botón
    button.classList.add("rotate");
    setTimeout(() => button.classList.remove("rotate"), 500);
});

// Botón de animación
document.getElementById("animateButton").addEventListener("click", () => {
    const memberSection = document.getElementById("member-section");
    const memberPhoto = document.getElementById("member-photo");
    const button = document.getElementById("animateButton");
    
    // Aplicar diferentes animaciones
    memberSection.classList.add("bounce");
    memberPhoto.classList.add("rotate");
    button.classList.add("bounce");
    
    // Remover las clases después de la animación
    setTimeout(() => {
        memberSection.classList.remove("bounce");
        memberPhoto.classList.remove("rotate");
        button.classList.remove("bounce");
    }, 1000);
});