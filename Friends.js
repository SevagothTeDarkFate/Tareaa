class Amigo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    saludar() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
    
    realizarActividad() {
        console.log(`${this.nombre} está realizando una actividad.`);
    }
}

class Deportista extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está practicando deportes.`);
    }
}

class Cocinera extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está cocinando.`);
    }
}

class Estudiante extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está estudiando.`);
    }
}

class Artista extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está creando arte.`);
    }
}

class Gamer extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está jugando videojuegos.`);
    }
}

class Lector extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está leyendo un libro.`);
    }
}

class Viajero extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está viajando.`);
    }
}

class Musico extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está tocando música.`);
    }
}

class Bailarin extends Amigo {
    realizarActividad() {
        console.log(`${this.nombre} está bailando.`);
    }
}

const amigo1 = new Deportista("Gustavo");
const amigo2 = new Cocinera("Melissa");
const amigo3 = new Estudiante("Carlos");
const amigo4 = new Artista("Orlin");
const amigo5 = new Gamer("Nicole");
const amigo6 = new Lector("Cristian");

amigo1.saludar();
amigo1.realizarActividad();

amigo2.saludar();
amigo2.realizarActividad();

amigo3.saludar();
amigo3.realizarActividad();

amigo4.saludar();
amigo4.realizarActividad();

amigo5.saludar();
amigo5.realizarActividad();

amigo6.saludar();
amigo6.realizarActividad();
