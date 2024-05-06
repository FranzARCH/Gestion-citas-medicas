import { medicos} from '../datos/citaMedica.js'

let camposMedicos = ['--Seleccionar especialidad--', 'Psiquiatría', 'Cardiología', 'Oftalmología', 'Ginecología', 'Traumatología', 'Gastroenterología', 'Urología', 'Obstetricia', 'Pediatría']
let horasDisponibles = ['--Seleccionar hora--', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

// CUALQUIER INTERACCIÓN CON EL HTML DEL ARREGLO

let espeO = ''

for (let i = 0; i < camposMedicos.length; i++) {
    espeO += '<option id="opcionespecialidad" onchange="obtenerEspecialidad()">' + camposMedicos[i] + '</option>'
}

document.getElementById('escogerespecialidad').innerHTML = espeO

// única modificación en el html: <select name="" id="escogerespecialidad" required></select><br><br>

let horaO = ''

for (let i = 0; i < horasDisponibles.length; i++) {
    horaO += '<option id="opcionhora" onchange="obtenerHora()">' + horasDisponibles[i] + '</option>'
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


function obtenerMedicos() {
    let especialidadElegida = obtenerEspecialidad()
    let horaElegida = obtenerHora()

    let disponibilidad1 = medicos.filter(elemento => elemento.especialidades.some(elemento => elemento === especialidadElegida))
    let disponibilidad2 = medicos.filter(elemento => !elemento.horasOcupadas.includes(horaElegida))

    console.log(disponibilidad1, disponibilidad2)

    let listaMedicos = disponibilidad1.filter(elemento => disponibilidad2.includes(elemento))

    let medO = ''

    if (listaMedicos.length === 0) {
        medO += '<option id="opcionmedico">' + '--No hay médicos disponibles--' + '</option>'
    }

    for (let i = 0; i < listaMedicos.length; i++) {
        medO += '<option id="opcionmedico">' + listaMedicos[i].nombre + '</option>'
    }
    
    document.getElementById('escogermedico').innerHTML = medO
}

let opcionesE = document.getElementById('escogerespecialidad')
let opcionesH = document.getElementById('escogerhora')

opcionesE.addEventListener('change', function() {
    obtenerEspecialidad()
    obtenerHora()
    obtenerMedicos()
})

opcionesH.addEventListener('change', function() {
    obtenerHora()
    obtenerEspecialidad()
    obtenerMedicos()
})

// única modificación en el html: <select name="" id="escogermedico" required></select><br><br>
