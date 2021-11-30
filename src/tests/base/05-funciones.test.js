import {getUser, getUsuarioActivo} from '../../base/05-funciones'
import '@testing-library/jest-dom';

describe('pruebas en 05-funciones', ()=> {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual(userTest);
    })

    //Tarea : getUsuarioActivo debe de retornar un objeto

    test('getUsuarioActivo debe de retornar un objeto ', () => {
        const nombre = 'rox';
        const userActive = getUsuarioActivo(nombre);

        expect(userActive).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
    
    
})