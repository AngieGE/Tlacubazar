import { Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response){
        res.send('ddd');//json({ text: 'API IS /api/cuestionarios'});
        console.log("send at indexController");
    }
}

export const indexController = new IndexController();
