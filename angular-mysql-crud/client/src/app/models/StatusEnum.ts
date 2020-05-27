export class StatusEnum {
    idStatusEnum?: number;
    status?: _StatusEnum.StatusEnum;

    constructor(statusEnum?: StatusEnum) {
      if (statusEnum != null) {
        this.idStatusEnum = statusEnum.idStatusEnum,
        this.status = statusEnum.status;
      }
    }
}

  export namespace _StatusEnum {
    export type StatusEnum  =  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
      export const StatusEnum = {
          EN_CARRITO: 1,      // como en wish list
          ESPERANDO_ENVIO: 2, // ya lo pidio
          ENVIADA: 3,         // ya esta proximo a llegar
          RECIBIDA: 4,        // ya se entrego
          CANCELADA: 5,       // el usuario cancela su orden

          STORE_EN_ESPERA: 6,
          STORE_ACEPTADA: 7,
          STORE_RECHAZADA: 8
      };

}
