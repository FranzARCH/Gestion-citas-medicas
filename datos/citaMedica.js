// PESTAÑA 2

//-------------------- Médicos disponibles --------------------//

let medico1 = {
    nombre: 'Ciro Rodriguez',
    especialidades: ['Psiquiatría', 'Cardiología', 'Oftalmología', 'Ginecología'],
    horasOcupadas: [8, 10, 11, 16, 20]  // Formato 24 horas
}

let medico2 = {
    nombre: 'Fanny Mori',
    especialidades: ['Gastroenterología', 'Ginecología', 'Obstetricia', 'Urología'],
    horasOcupadas: [7, 9, 12, 15, 17]  // Formato 24 horas
}

let medico3 = {
    nombre: 'Pablo Romero',
    especialidades: ['Cardiología', 'Traumatología', 'Gastroenterología', 'Urología'],
    horasOcupadas: [9, 11, 15, 16, 18]  // Formato 24 horas
}

let medico4 = {
    nombre: 'Maria Elena',
    especialidades: ['Psiquiatría', 'Oftalmología', 'Traumatología', 'Pediatría'],
    horasOcupadas: [10, 13, 14, 19, 20]  // Formato 24 horas
}

let medico5 = {
    nombre: 'Heddy Colca',
    especialidades: ['Obstetricia', 'Pediatría', 'Psiquiatría', 'Oftalmología'],
    horasOcupadas: [10, 13, 14, 18, 19]  // Formato 24 horas
}


//-------------------- Citas médicas --------------------//

let citasMedicas = [
    {especialidadCita: 'Obstetricia', dia: 4, mes: 5, anio: 2024, horaCita: 14, medicoCita: 'Heddy Colca', correo: 'harumi.contreras@unmsm.edu.pe', motivo: 'Chequeo periódico'},
    {especialidadCita: 'Cardiología', dia: 5, mes: 5, anio: 2024, horaCita: 11, medicoCita: 'Ciro Rodriguez', correo: 'joar.aranda@unmsm.edu.pe', motivo: 'Dolor de pecho'}
]

let resultado = citasMedicas[1]

console.log(resultado)

//array.push(elemento) para agregar citas