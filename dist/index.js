"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateProcessingTime = void 0;
/** calculateProcessingTime
 * Esta funcion es la encargada de dar el tiempo que se debe tomar por recorrer cada tecla segun el input ingresado
*/
function calculateProcessingTime(numberKeys, input) {
    // convierto el input de string ("1297") a un array string (["1", "2", "9", "7"])
    const digits = input.split('');
    /**
     * Esta variable sera un auxiliar, con ella pretendo guardar el indice que la tecla anterior para asi poder restarla con la siguiente
     * */
    let beforeIndexNumberKey = 0;
    const time = digits.reduce((time, digit) => {
        /** Ahora busco el indice exacto en donde se ubica el digito */
        const indexNumberKey = numberKeys.findIndex((numberKey) => numberKey === Number(digit));
        /** Para calcular los indices que recorrio resto el indice anterior con el indice siguiente, el valor de la resta lo
         * transformo en un numero positivo usando `Math.abs`
          */
        const total = time + Math.abs(indexNumberKey - beforeIndexNumberKey);
        /**Guardo este indice para poder compararlo con el siguiente*/
        beforeIndexNumberKey = indexNumberKey;
        return total;
    }, 0);
    /** Devuelvo el vamor en string y agrego el ms para indiciar milisegundos */
    return `${time}ms`;
}
exports.calculateProcessingTime = calculateProcessingTime;
