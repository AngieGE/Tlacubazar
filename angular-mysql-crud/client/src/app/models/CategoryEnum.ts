// Description: the category a store or product is.
export class CategoryEnum {
    idCategoryEnum?: number;
    category?: string;

    // extra
    selected = true;

    constructor(categoryEnum?: CategoryEnum) {
      if (categoryEnum != null) {
        this.idCategoryEnum = categoryEnum.idCategoryEnum;
        this.category = categoryEnum.category;
      }
    }
}
