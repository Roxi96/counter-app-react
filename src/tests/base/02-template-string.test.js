import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";



describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar hola Roxana', ()=>{

        const nombre = 'Roxana';

       const saludo=  getSaludo( nombre);

       expect( saludo ).toBe('Hola '+ nombre + ' !');

    })
})

test('get Saludo debe de retornar Hola carlos si no hay argumentos en el nombre ', () => {
    
    const saludo = getSaludo();
    expect(saludo).toBe('Hola carlos !');
})

//getSaludo debe de retornar Hola Carlos! si no hay argumento en el nombre