export class StatusEnum {
    idStatusEnum?: number;
    status?: _StatusEnum.StatusEnum;
    
    // Has many
    
    // Belongs to 

    constructor(statusEnum: StatusEnum) {
        this.idStatusEnum=statusEnum.idStatusEnum,
        this.status=statusEnum.status;
    }
}

export namespace _StatusEnum {
    export type StatusEnum ='ESPERANDO_ENVIO'| 'PAUSADA'|'ENVIADA'| 'RECIBIDA'| 
                            'PAGADA'| 'CANCELADA' | 'STORE_EN_ESPERA' | 'STORE_ACEPTADA'|
                            'STORE_RECHAZADA';
    export const StatusEnum = {
        ESPERANDO_ENVIO: 'ESPERANDO_ENVIO' as StatusEnum,
        PAUSADA: 'PAUSADA' as StatusEnum,
        ENVIADA: 'ENVIADA' as StatusEnum,
        RECIBIDA: 'RECIBIDA' as StatusEnum,
        PAGADA: 'PAGADA' as StatusEnum,
        CANCELADA: 'CANCELADA' as StatusEnum,
        STORE_EN_ESPERA: 'STORE_EN_ESPERA' as StatusEnum,
        STORE_ACEPTADA: 'STORE_ACEPTADA' as StatusEnum,
        STORE_RECHAZADA: 'STORE_RECHAZADA' as StatusEnum,
    };

}
