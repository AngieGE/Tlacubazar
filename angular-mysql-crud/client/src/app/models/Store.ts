import { Address, StatusEnum, User } from './index';

export class Store {
  idStore?: number;
  name?: string;
  description?: string;
  fkAddress?: number;
  isServiceStore?: number;
  acceptsCacao?: number;
  fkStatusEnum?: number;
  fkVendor?: number;

  // has
  address: Address;
  statusEnum: StatusEnum;
  vendor: User;

  // extra
  isCollapsed = false;

  constructor(store?: Store) {
    if (store != null) {
      this.idStore = store.idStore;
      this.name = store.name;
      this.description = this.description;
      this.fkAddress = store.fkAddress;
      this.isServiceStore = store.isServiceStore;
      this.acceptsCacao = store.acceptsCacao;
      this.fkStatusEnum = store.fkStatusEnum;
      this.fkVendor = store.fkVendor;
    }
  }
}
