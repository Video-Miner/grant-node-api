import * as express from 'express';
import LivepoolNodeController from '../controllers/node.controller';
import l from "../../common/logger"

let router =  express.Router()
let controller = new LivepoolNodeController()

router.get('/status', (req, res, next) => controller.status(req, res, next))

router.get('/transcoders', (req, res, next) => controller.transcoders(req, res, next))

 export default router 