import { Store, User } from './index';

export class StoreReview {
    idStoreReview?: number;
    stars?: number;
    review?: string;
    fkStore?: number;
    fkUser?: number;

    // has
    store: Store = new Store();
    user: User = new User();

    constructor(productReview?: StoreReview) {
      if (productReview != null) {
        this.idStoreReview = productReview.idStoreReview;
        this.stars = productReview.stars;
        this.review = productReview.review;
        this.fkStore = productReview.fkStore;
        this.fkUser = productReview.fkUser;
      }
    }
}
