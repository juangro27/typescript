// Sabemos que para usar “cualquier tipo de dato” podemos usar el tipo any sin embargo, esto es peligroso ya que le indicamos que puede entrar cualquier tipo de dato.

// Es por ello que es una muy buena práctica utilizar el tipo de dato unknown ya que esta nos permite trabajar con cualquier tipo de dato pero en base al tipo de dato podemos asignarla a otra variable o realizar algo en especial.

let x:unknown = 10;
// let v1: number =  x //  Error
// let v2: object = x; // Error
// let v3: string = x; // Error
// let v4: string[] = x; // Error
// let v5: {} = x; // Error
// let v6: {} | null | undefined = x; // Error
// definimos el tipo
let v10: number = x as number  // Ok
// También nos permite realizar operaciones hasta poder definir un tipo de dato específico:

function sum(a:unknown, b: number) {
    // comprobando el tipo
    if(typeof a === "number"){
        return a + b
    }
   throw new Error(`La variable '${a}' no es un número`);

}
sum(10,2) // 12
// Error
sum("hola",2) // La variable 'hola' no es un número
sum({a:5},2) // La variable [object Object] no es un númer```
