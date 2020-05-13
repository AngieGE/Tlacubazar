export class CategoryEnum {
    idCategoryEnum?: number;
    category?: string;

    constructor(categoryEnum: CategoryEnum){
        this.idCategoryEnum=categoryEnum.idCategoryEnum;
        this.category=categoryEnum.category;
    }
}