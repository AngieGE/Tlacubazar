export class StatusEnum { //CONVERTIR DESPUES NE ENUM
    idStatusEnum?:number;
    status?:string;
    constructor(statusEnum:StatusEnum){
        this.idStatusEnum=statusEnum.idStatusEnum;
        this.status=statusEnum.status;
    }
}