import chatRoutes from "./routeHandlers/chat";
import Router from 'express';

const router = Router();
router.get('/allChats',chatRoutes.getAllChats);

export default router;