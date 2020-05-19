import { Store, User } from './index';

export class StoreReview {
    idStoreReview?: number;
    stars?: number;
    review?: string;
    fkStore?: number;
    fkUser?: number;

    // has
    store?: Store = new Store();
    user?: User = new User();

    constructor(storeReview?: StoreReview) {
      if (storeReview != null) {
        this.idStoreReview = storeReview.idStoreReview;
        this.stars = storeReview.stars;
        this.review = storeReview.review;
        this.fkStore = storeReview.fkStore;
        this.fkUser = storeReview.fkUser;
      }
    }
}
