import { Request , Response } from 'express';

let Canciones: any[] = []
class SongsController{
    
    public list (req: Request,res: Response) {
       if (Canciones.length>0){ 
        res.status(200).json({Canciones});
       }
       else{
        res.status(404).json({Canciones});
       }

    }
    public listone (req: Request,res: Response) {
        let Cancion;
        for (let i = 0;i<Canciones.length;i++){
            if (Canciones[i].nombre == req.params.id){
                Cancion = Canciones[i];                
            }
        }
        if (Cancion == null){
            res.status(404).json({ Response: '404 Not found' });
        }
        else{
            res.status(200).json( Cancion );
        }
        
    }
    public create (req:Request, res:Response){
        Canciones.push((req.body));
        res.status(201).json({ Response: '201' });
    }
    public delete (req:Request, res:Response){
        let Canciones2: any[] = []
        let count = 0;
        for (let i = 0;i<Canciones.length;i++){
            if (Canciones[i].nombre == req.params.id){
                count++;
            }
            else{
                Canciones2.push(Canciones[i]);
            }
        }
        if (count >0){
            Canciones = Canciones2;
            res.status(204).json({Response: '204'});
        }
        else{
            res.status(404).json({Response: '404 Not Found'});
        }

    }
    public update (req:Request, res:Response){
        let Canciones2: any[] = []
        let count = 0;
        for (let i = 0;i<Canciones.length;i++){
            if (Canciones[i].nombre == req.params.id){
                count++;
            }
            else{
                Canciones2.push(Canciones[i]);
            }
        }
        if (count >0){
            Canciones = Canciones2;
            Canciones.push((req.body));
            res.status(204).json({ Response: '204' });
        }
        else{
            res.status(404).json({ Response: '404 Not Found' });
        }
        
    }

}

const songsController = new SongsController();
export default songsController;