import {Request,Response} from 'express';
import pool from '../database';


class HeroesController 
{
    public async index(req: Request, resp: Response)
    {
        const heroes = await pool.query('SELECT * FROM heroes');
        resp.json(heroes);
    }

    public async showOne(req: Request, resp: Response): Promise<any>
    {
        console.log('HERE');
        let { id } = req.params;
        let heroe = await pool.query('SELECT * FROM heroes WHERE idHeroe = ?',[id]);

        if(heroe.length > 0)
        {
            return resp.status(200).json(heroe);
        }  
        resp.status(404).json({message: 'The heroe does not exists'});
    }

    public async create(req: Request, resp: Response): Promise<void>
    {
        await pool.query('INSERT INTO heroes set ?',[req.body]);
        resp.json({text: 'Heroe saved'});
    }

    public async update(req: Request, resp: Response): Promise<void>
    {
        let { id } =  req.params;
        await pool.query('UPDATE heroes set ? WHERE idHeroe = ?',[req.body, id]);
        resp.status(200).json({message: 'The heroe was updated'});
    }
    
    public async delete(req: Request, resp: Response): Promise <void>
    {
        let { id } =  req.params;
        let heroe = await pool.query('SELECT * FROM heroes WHERE idHeroe = ?',[id]);
        if(heroe.length > 0)
        {
            // await pool.query('DELETE FROM heroes WHERE idHeroe = ?',[id]);
            resp.status(200).json({message: 'The heroe was deleted'});
        }
        else 
        {
            resp.status(404).json({message: 'The heroe does not exists'});
        }
    }
}

export const heroesController = new HeroesController();
