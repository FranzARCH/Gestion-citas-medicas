// PESTAÑA 3

//-------------------- Pacientes --------------------//

let paciente1 = {
    usuario: 'joarcitouwu', // en caso haya inicio de sesión
    contrasena: 'software1', // en caso haya inicio de sesión
    nombreCompleto: 'Joar Jesus Aranda Vega',
    edad: 19,
    residencia: 'Breña',
    pesoKilos: 70,
    alturaMetros: 1.72,
    tipoSangre: 'O+',
    alergias: ['No tiene'],
    enfermedades: ['Cáncer'],
}

let paciente2 = {
    usuario: 'harumomazos', // en caso haya inicio de sesión
    contrasena: 'software2', // en caso haya inicio de sesión
    nombreCompleto: 'Harumi Nayeli Contreras Quispe',
    edad: 19,
    residencia: 'Ate',
    pesoKilos: 54,
    alturaMetros: 1.56,
    tipoSangre: 'A-',
    alergias: ['Maní'],
    enfermedades: ['Parkinson'],
}

let paciente3 = {
    usuario: 'franzchar', // en caso haya inicio de sesión
    contrasena: 'software3', // en caso haya inicio de sesión
    nombreCompleto: 'Franz Esteban Chipana Arellano',
    edad: 20,
    residencia: 'San Juan de Lurigancho',
    pesoKilos: 69,
    alturaMetros: 1.74,
    tipoSangre: 'O-',
    alergias: ['No tiene'],
    enfermedades: ['Esquizofrenia'],
}

let paciente4 = {
    usuario: 'sofishy', // en caso haya inicio de sesión
    contrasena: 'software4', // en caso haya inicio de sesión
    nombreCompleto: 'Sofía Fernanda Sarmiento Quispe',
    edad: 19,
    residencia: 'Callao',
    pesoKilos: 54,
    alturaMetros: 1.51,
    tipoSangre: 'A+',
    alergias: ['Penicilina'],
    enfermedades: ['Depresión'],
}

let pacientes = [paciente1, paciente2, paciente3, paciente4]

//-------------------- Inicio de sesión --------------------//

function iniciarSesion() {
    let usuarioActual = document.getElementById('usuario').value
    let contrasenaActual = document.getElementById('contrasena').value

    let pacienteExiste = pacientes.find(elemento => elemento.usuario == usuarioActual && elemento.contrasena == contrasenaActual)

    if (pacienteExiste) {
        window.location.href = "../index.html"
    } else {
        document.getElementById('mensajefinal').innerHTML = 'Usuario o contraseña no válidos'
    }
}
