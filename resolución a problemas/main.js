function areaTriangulo() {
    alert("Vamos a calcular el área de un triángulo");
    const a = parseFloat(prompt("Ingrese el valor de a"));
    const b = parseFloat(prompt("Ingrese el valor de b"));
    const c = parseFloat(prompt("Ingrese el valor de c"));
    const area = a + b + c;
    alert("El área del triángulo será: " + area);
}

function perimetroCuadrado() {
    alert("Vamos a calcular el perímetro de un cuadrado");
    const lado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado: "));
    const perimetro = 4 * lado;
    alert("El perímetro del cuadrado será: " + perimetro);
}

function almacenDeEdades() {
    alert("Este es el organigrama de edades.");
    const edades = [];
    let contadorMenores = 0;
    let contadorMayores = 0;
    let contadorAdultosMayores = 0;

    for (let i = 0; i < 10; i++) {
        let edad = parseInt(prompt("Introduzca la edad de la persona número " + (i + 1)));
        if (edad >= 1 && edad <= 120) {
            edades.push(edad);
            if (edad <= 18) {
                contadorMenores++;
            } else if (edad >= 60) {
                contadorAdultosMayores++;
            } else {
                contadorMayores++;
            }
        } else {
            alert("La edad ingresada no es válida, ingrese de nuevo el valor.");
            i--;
        }
    }

    const edadMasAlta = Math.max(...edades);
    const edadMasBaja = Math.min(...edades);
    const promedioEdades = edades.reduce((a, b) => a + b, 0) / edades.length;

    alert("- La cantidad de menores de edad es: " + contadorMenores +
        "\n- La cantidad de mayores de edad es: " + contadorMayores +
        "\n- La cantidad de adultos mayores es: " + contadorAdultosMayores +
        "\n- La edad más alta es: " + edadMasAlta +
        "\n- La edad más baja es: " + edadMasBaja +
        "\n- El promedio de edades es: " + promedioEdades);
}

function mezclaDeVectores() {
    alert("Bienvenido al programa de mezcla de vectores");
    const vector1 = leerVectorOrdenado("1");
    const vector2 = leerVectorOrdenado("2");

    const vectorMezclado = [];

    let i = 0;
    let j = 0;

    while (i < 5 && j < 5) {
        if (vector1[i] < vector2[j]) {
            vectorMezclado.push(vector1[i]);
            i++;
        } else {
            vectorMezclado.push(vector2[j]);
            j++;
        }
    }

    while (i < 5) {
        vectorMezclado.push(vector1[i]);
        i++;
    }

    while (j < 5) {
        vectorMezclado.push(vector2[j]);
        j++;
    }

    alert("El vector mezclado es: " + vectorMezclado.join(" "));
}

function leerVectorOrdenado(nombreVector) {
    const vector = [];
    
    for (let i = 0; i < 5; i++) {
        let numeroIngresado;
        do {
            numeroIngresado = parseInt(prompt(`Ingrese el número ${i + 1} del vector ${nombreVector}`));
            if (i > 0 && numeroIngresado <= vector[i - 1]) {
                alert("El número ingresado no es válido. Debe ser mayor que el número anterior.");
            } else if (isNaN(numeroIngresado)) {
                alert("Ingrese un número válido.");
            }
        } while (isNaN(numeroIngresado) || (i > 0 && numeroIngresado <= vector[i - 1]));
        
        vector.push(numeroIngresado);
    }
    
    return vector;
}
const personas = [];
const canciones = {};

function encuestaDeMusica() {
    alert("Bienvenido al programa de encuesta de música");

    while (true) {
        let opcion = parseInt(prompt("Ingrese la opción que desea realizar:\n1. Agregar una persona\n2. Mostrar información de una persona\n3. Mostrar ranking de canciones y cantantes\n4. Salir"));

        switch (opcion) {
            case 1:
                agregarPersona();
                break;
            case 2:
                mostrarPersona();
                break;
            case 3:
                mostrarRanking();
                break;
            case 4:
                alert("Gracias por usar el programa");
                return;
            default:
                alert("La opción ingresada no es válida, ingrese de nuevo el valor.");
                break;
        }
    }
}

function agregarPersona() {
    const persona = {
        nombre: prompt("Ingrese el nombre de la persona"),
        identificacion: parseInt(prompt("Ingrese la identificación (cédula) de la persona")),
        fechaNacimiento: prompt("Ingrese la fecha de nacimiento de la persona"),
        correo: prompt("Ingrese el correo electrónico de la persona"),
        ciudadResidencia: prompt("Ingrese la ciudad de residencia de la persona"),
        ciudadOrigen: prompt("Ingrese la ciudad de origen de la persona"),
        cancionesFavoritas: [],
    };

    for (let i = 0; i < 3; i++) {
        const cancion = {
            artista: prompt(`Ingrese el artista de la canción favorita ${i + 1}`),
            titulo: prompt(`Ingrese el título de la canción favorita ${i + 1}`),
        };
        persona.cancionesFavoritas.push(cancion);

        // Agregar la canción al registro de canciones
        if (!canciones[cancion.artista]) {
            canciones[cancion.artista] = {};
        }
        if (!canciones[cancion.artista][cancion.titulo]) {
            canciones[cancion.artista][cancion.titulo] = 0;
        }
        canciones[cancion.artista][cancion.titulo]++;
    }

    personas.push(persona);
    alert("Persona agregada exitosamente.");
}

function mostrarPersona() {
    const posicion = parseInt(prompt("Ingrese la posición de la persona que desea mostrar"));
    const persona = personas[posicion - 1];

    alert(`Nombre: ${persona.nombre}
Identificación: ${persona.identificacion}
Fecha de Nacimiento: ${persona.fechaNacimiento}
Correo: ${persona.correo}
Ciudad de Residencia: ${persona.ciudadResidencia}
Ciudad de Origen: ${persona.ciudadOrigen}`);
}

function mostrarRanking() {
    // Crear un array de canciones a partir del registro
    const ranking = [];
    for (const artista in canciones) {
        for (const titulo in canciones[artista]) {
            ranking.push({ artista, titulo, votos: canciones[artista][titulo] });
        }
    }

    // Ordenar el ranking por cantidad de votos en orden descendente
    ranking.sort((a, b) => b.votos - a.votos);

    // Mostrar el ranking
    let rankingStr = "Ranking de canciones y cantantes:\n";
    for (let i = 0; i < ranking.length; i++) {
        rankingStr += `${i + 1}. Artista: ${ranking[i].artista}, Título: ${ranking[i].titulo}, Votos: ${ranking[i].votos}\n`;
    }

    alert(rankingStr);
}
