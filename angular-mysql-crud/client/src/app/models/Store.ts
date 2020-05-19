import { Address } from './Address';
import { StatusEnum} from './StatusEnum';
import { User } from './User';
import { StoreReview } from './StoreReview';
import { CategoryEnum } from './CategoryEnum';

export class Store {
  idStore?: number;
  name?: string;
  description?: string;
  phone?: string;
  link?: string;
  fkAddress?: number;
  isServiceStore?: number;
  acceptsCacao?: number;
  fkStatusEnum?: number;
  fkVendor?: number;
  fkCategoryEnum?: number;

  // has
  address: Address = new Address();
  statusEnum: StatusEnum = new StatusEnum();
  vendor: User = new User();
  categoryEnum: CategoryEnum = new CategoryEnum();
  storeReviews: StoreReview[] = new Array();


  // extra
  isCollapsed = true;
  score: number;
  scoreLenght: number;
  currentRate = 5;

  constructor(store?: Store) {
    if (store != null) {
      this.idStore = store.idStore;
      this.name = store.name;
      this.description = store.description;
      this.phone = store.phone;
      this.link = store.link;
      this.fkAddress = store.fkAddress;
      this.isServiceStore = store.isServiceStore;
      this.acceptsCacao = store.acceptsCacao;
      this.fkStatusEnum = store.fkStatusEnum;
      this.fkVendor = store.fkVendor;
      this.fkCategoryEnum = store.fkCategoryEnum;
      this.score = 0;
      this.scoreLenght = 0;
    }
  }
}
