// Colores para el fondo  
const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"]; 
let colorIndex = 0; 
 
// Datos de los integrantes 
const members = [ 
  { photo: "angel.jpeg", desc: "Jose Angel - Conocido como Juanito Manolo, bautizado por luis lao." }, 
  { photo: "alumno2.jpg", desc: "Alumno 2 - Descripción breve." } 
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
 
// Botón cambio de color 
document.getElementById("colorButton").addEventListener("click", () => { 
  document.body.style.backgroundColor = colors[colorIndex]; 
  colorIndex = (colorIndex + 1) % colors.length; 
}); 
 
// Botón cambio de integrante 
document.getElementById("switchButton").addEventListener("click", () => { 
  memberIndex = (memberIndex + 1) % members.length; 
  document.getElementById("member-photo").src = members[memberIndex].photo; 
  document.getElementById("member-desc").textContent = members[memberIndex].desc; 
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