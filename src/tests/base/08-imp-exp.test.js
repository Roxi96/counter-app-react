import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('pruebas en funciones en funciones de heroes',()=> {
    test('debe de retornar un heroe por id', () => {
        const id=1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect (heroe).toEqual(heroeData);
    });

    test('debe de retornar undefined si heroe no existen', () => {
        const id=10;
        const heroe = getHeroeById(id);

        expect (heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner='DC';
        const heroe = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner);

        expect (heroe).toEqual(heroesData);
    });
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner='Marvel';
        const heroe = getHeroesByOwner(owner);

        // const heroesData = heroes.filter( h => h.owner === owner);

        expect (heroe.length).toEqual(2);
    });
    
})