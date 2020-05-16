export class StateEnum {
    idStateEnum?: number;
    state?: string;

    constructor(stateEnum?: StateEnum) {
      if (stateEnum != null) {
        this.idStateEnum = stateEnum.idStateEnum;
        this.state = stateEnum.state;
      }

    }
}
