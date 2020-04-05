import LivepoolNodeService from '../services/node.service';
import l from "../../common/logger"

export default class LivepoolNodeController {
    constructor() {
        this._service = new LivepoolNodeService()
    }

    transcoders(req, res, next) {
        this._service.transcoders()
            .then(r => res.json(r))
            .catch(err => next(err))
    }

    status(req, res, next) {
        this._service.status()
        .then(r => res.json(r))
        .catch(err => next(err))
    }
}
