import{ Router } from 'express';

import  songsController  from '../controllers/songsController';

class SongsRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',songsController.list);
        this.router.get('/:id',songsController.listone);
        this.router.post('/',songsController.create);
        this.router.put('/:id',songsController.update);
        this.router.delete('/:id',songsController.delete);
    }

}

const songsRoutes = new SongsRoutes();
export default songsRoutes.router;