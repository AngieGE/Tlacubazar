export class StateEnum {
    idStateEnum?: number;
    state?:string;
    
    constructor(stateEnum:StateEnum){
        this.idStateEnum=stateEnum.idStateEnum;
        this.state=stateEnum.state;
    }
}