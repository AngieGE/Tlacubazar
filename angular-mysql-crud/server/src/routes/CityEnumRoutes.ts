import {Router} from 'express';
import {CityEnumController} from '../controllers'

 export class CityEnumRoutes{
    public router: Router = Router();
    static instance: CityEnumRoutes

    static getInstance(): CityEnumRoutes {
        if (this.instance==null) this.instance = new CityEnumRoutes();
        return this.instance;
    }


    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', CityEnumController.listCityEnum);
        this.router.get('/:idCityEnum', CityEnumController.getCityEnum);
        this.router.post('/', CityEnumController.createCityEnum);
        this.router.put('/:idCityEnum', CityEnumController.updateCityEnum);
        this.router.delete('/:idCityEnum', CityEnumController.deleteCityEnum);
    }
}


