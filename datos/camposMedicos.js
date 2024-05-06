import { medicos } from '../datos/citaMedica.js'

let camposMedicos = ['Psiquiatría', 'Cardiología', 'Oftalmología', 'Ginecología', 'Traumatología', 'Gastroenterología', 'Urología', 'Obstetricia', 'Pediatría']
let horasDisponibles = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// CUALQUIER INTERACCIÓN CON EL HTML DEL ARREGLO

let espeO = ''

for (let i = 0; i < camposMedicos.length; i++) {
    espeO += '<option id="opcionespecialidad">' + camposMedicos[i] + '</option>'
}

document.getElementById('escogerespecialidad').innerHTML = espeO

// única modificación en el html: <select name="" id="escogerespecialidad" required></select><br><br>

let horaO = ''

for (let i = 0; i < horasDisponibles.length; i++) {
    let horaImpresa = String(horasDisponibles[i]) + ':00'
    horaO += '<option id="opcionhora">' + horaImpresa + '</option>'
}

document.getElementById('escogerhora').innerHTML = horaO

// única modificación en el html: <select name="" id="escogerhora" required> </select><br><br>

function obtenerEspecialidad() {
    let opcionesESP = document.getElementById("escogerespecialidad")
    let especialidadSeleccionada = opcionesESP.value
    return especialidadSeleccionada
}

function obtenerHora() {
    let opcionesHOR = document.getElementById("escogerhora")
    let horaSeleccionada = opcionesHOR.value
    return horaSeleccionada
}


let especialidadElegida = obtenerEspecialidad()
let horaElegida = obtenerHora()

let disponibilidad1 = medicos.filter(elemento => elemento.especialidades.some(elemento => elemento == especialidadElegida))
let disponibilidad2 = medicos.filter(elemento => !elemento.horasOcupadas.some(elemento => elemento == horaElegida))

console.log(disponibilidad1, disponibilidad2)

let medicosDisponibles = disponibilidad1.filter(elemento => disponibilidad2.includes(elemento))

let medO = ''

for (let i = 0; i < medicosDisponibles.length; i++) {
    medO += '<option id="opcionmedico">' + medicosDisponibles[i] + '</option>'
}

document.getElementById('escogermedico').innerHTML = medO

// única modificación en el html: <select name="" id="escogermedico" required></select><br><br>
