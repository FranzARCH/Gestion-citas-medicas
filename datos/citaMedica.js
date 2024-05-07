// PESTAÑA 2

//-------------------- Médicos disponibles --------------------//

let medico1 = {
    nombre: 'Ciro Rodriguez',
    especialidades: ['Psiquiatría', 'Cardiología', 'Oftalmología', 'Ginecología'],
    horasOcupadas: ['08:00', '10:00', '11:00', '16:00', '20:00']  // Formato 24 horas
}

let medico2 = {
    nombre: 'Fanny Mori',
    especialidades: ['Gastroenterología', 'Ginecología', 'Obstetricia', 'Urología'],
    horasOcupadas: ['07:00', '09:00', '12:00', '15:00', '17:00']  // Formato 24 horas
}

let medico3 = {
    nombre: 'Pablo Romero',
    especialidades: ['Cardiología', 'Traumatología', 'Gastroenterología', 'Urología'],
    horasOcupadas: ['09:00', '11:00', '15:00', '16:00', '18:00']  // Formato 24 horas
}

let medico4 = {
    nombre: 'Maria Elena',
    especialidades: ['Psiquiatría', 'Oftalmología', 'Traumatología', 'Pediatría'],
    horasOcupadas: ['10:00', '13:00', '14:00', '19:00', '20:00']  // Formato 24 horas
}

let medico5 = {
    nombre: 'Heddy Colca',
    especialidades: ['Obstetricia', 'Pediatría', 'Psiquiatría', 'Oftalmología'],
    horasOcupadas: ['10:00', '13:00', '14:00', '18:00', '19:00']  // Formato 24 horas
}

let medicos = [medico1, medico2, medico3, medico4, medico5]

//-------------------- Citas médicas --------------------//

let citasMedicas = [
    {especialidadCita: 'Obstetricia', fecha: '2024-5-14', horaCita: 14, medicoCita: 'Heddy Colca', correo: 'harumi.contreras@unmsm.edu.pe', motivo: 'Chequeo periódico'},
    {especialidadCita: 'Cardiología', fecha: '2024-5-10', horaCita: 11, medicoCita: 'Ciro Rodriguez', correo: 'joar.aranda@unmsm.edu.pe', motivo: 'Dolor de pecho'}
]

function agregarCita(nuevaEspecialidad, nuevaFecha, nuevaHoraCita, nuevoMedicoCita, nuevoCorreo, nuevoMotivo) {
    let nuevaCita = {
        especialidades: nuevaEspecialidad,
        fecha: nuevaFecha,
        horaCita: nuevaHoraCita,
        medicoCita: nuevoMedicoCita,
        correo: nuevoCorreo,
        motivo: nuevoMotivo,
    }
    citasMedicas.push(nuevaCita)
    console.log(nuevaCita)
    document.getElementById('mensaje').innerHTML = 'Su cita ha sido agendada'
}

let agendarC = document.getElementById('botonagendar')

export { medicos}

//-------------------- Citas médicas --------------------//
const form = document.getElementById('form')

form.addEventListener("submit", e => {
    e.preventDefault()
    const elegidaESP = document.getElementById('escogerespecialidad')
    const elegidaFEC = document.getElementById('fecha_cita')
    const elegidoHOR = document.getElementById('escogerhora')
    const elegidoMED = document.getElementById('escogermedico')
    const elegidoCOR = document.getElementById('email')
    const elegidoMOT = document.getElementById('especificaciones')
    let nuevaEspecialidad = elegidaESP.innerHTML
    let nuevaFecha = elegidaFEC.innerHTML
    let nuevaHoraCita = elegidoHOR.innerHTML
    let nuevoMedicoCita = elegidoMED.innerHTML
    let nuevoCorreo = elegidoCOR.innerHTML
    let nuevoMotivo = elegidoMOT.innerHTML
    agregarCita(nuevaEspecialidad, nuevaFecha, nuevaHoraCita, nuevoMedicoCita, nuevoCorreo, nuevoMotivo)
})
