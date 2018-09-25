export class Usuario {
    id_usuario?: number;
    matricula?: string;
    nombre?: string;
    correo?: string;
    contrasena?: string;
    contrasena2?: string;
    tipo?: number;
    id_carrera?: number;
}

export class Person {
    public name: string;
    public age: number;
    public email: string;
    public city: string;
    public street: string;
    public streetNumber: number;

    constructor(name: string, age: number, email: string, city: string, street: string, streetNumber: number) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
    }
}