"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusEnum {
    // Has many
    // Belongs to 
    constructor(statusEnum) {
        this.idStatusEnum = statusEnum.idStatusEnum,
            this.status = statusEnum.status;
    }
}
exports.StatusEnum = StatusEnum;
var _StatusEnum;
(function (_StatusEnum) {
    _StatusEnum.StatusEnum = {
        ESPERANDO_ENVIO: 'ESPERANDO_ENVIO',
        PAUSADA: 'PAUSADA',
        ENVIADA: 'ENVIADA',
        RECIBIDA: 'RECIBIDA',
        PAGADA: 'PAGADA',
        CANCELADA: 'CANCELADA',
        STORE_EN_ESPERA: 'STORE_EN_ESPERA',
        STORE_ACEPTADA: 'STORE_ACEPTADA',
        STORE_RECHAZADA: 'STORE_RECHAZADA',
    };
})(_StatusEnum = exports._StatusEnum || (exports._StatusEnum = {}));
