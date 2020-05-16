
export class DeliveryMethodEnum {
    idDeliveryMethodEnum?: number;
    deliveryMethod?: string;

    constructor(_deliveryMethod?: DeliveryMethodEnum) {
      if (_deliveryMethod != null) {
        this.idDeliveryMethodEnum = _deliveryMethod.idDeliveryMethodEnum;
        this.deliveryMethod = _deliveryMethod.deliveryMethod;
    }
      }
}

export namespace _DeliveryMethodEnum {
    export type DeliveryMethodEnum ='MOTO'| 'TAXI';
    export const DeliveryMethodEnum = {
        MOTO: 'MOTO' as DeliveryMethodEnum,
        TAXI: 'TAXI' as DeliveryMethodEnum,
    };
    // export const listTipos: TipoPreguntaEnum[] = [TipoPreguntaEnum.ABIERTA,
    //  TipoPreguntaEnum.SELECCION_MULTIPLE,
    //  TipoPreguntaEnum.OPCION_MULTIPLE];

}
