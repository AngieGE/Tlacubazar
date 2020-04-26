import { Request, Response } from 'express';
import pool from '../database';
class UserController {

    public async list (req: Request, res: Response){
        const cuestionarios = await pool.query('SELECT * FROM users')
        res.json(cuestionarios);
    }
    
    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const cuestionario = await pool.query('SELECT * FROM users WHERE idUser = ?', {id});
        console.log(cuestionario);
        if ( cuestionario.length > 0 ){
            return res.json(cuestionario[0]);
        }
        res.status(404).json({'text':'the user doesnt exist'})
    }
    
    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO users set ?', [req.body])
        res.json({'message':'saved user'});
    }
    
    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE idUser = ?', [{id}]);
        res.json({'message': 'the user was deleted'});
    }
    
    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE users set ? WHERE idUser = ?', [req.body, id])
        res.json({'message':'the user was updated '})
    }
}


const userController = new UserController();
export default userController;
