describe('pruebas en el archivo demo.test.js', () => {
    
    test('debend e ser iguales los string',()=>{
            //1.inicializacion
            const mensaje= 'hola mundo';

            //2.estimulo
            const mensaje2 = `hola mundo`;

            //3.observar el comportamiento
            expect(mensaje).toBe( mensaje2); // ===

    })
  

})
