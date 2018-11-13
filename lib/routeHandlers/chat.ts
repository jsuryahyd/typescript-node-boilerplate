import {Request,Response} from 'express';

interface Chat{
    id:String
}

class ChatRoutes {
    public getAllChats(req:Request,res:Response){
        res.json({
            success:true,
            chats:[{id:'x,vnxki'}]
        });
    }
}

export default new ChatRoutes();
