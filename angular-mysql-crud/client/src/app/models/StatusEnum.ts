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
          ESPERANDO_ENVIO: 1,
          PAUSADA: 2,
          ENVIADA: 3,
          RECIBIDA: 4,
          PAGADA: 5,
          CANCELADA: 6,
          STORE_EN_ESPERA: 7,
          STORE_ACEPTADA: 8,
          STORE_RECHAZADA: 9
      };

}
