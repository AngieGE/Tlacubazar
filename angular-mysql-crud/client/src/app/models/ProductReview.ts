import { Product, User } from './index';

export class ProductReview {
    idProductReview?: number;
    stars?: number;
    review?: string;
    fkProduct?: number;
    fkUser?: number;

    // has
    product: Product;
    user: User;

    constructor(productReview?: ProductReview) {
      if (productReview != null) {
        this.idProductReview = productReview.idProductReview;
        this.stars = productReview.stars;
        this.review = productReview.review;
        this.fkProduct = productReview.fkProduct;
        this.fkUser = productReview.fkUser;
      }
    }
}
