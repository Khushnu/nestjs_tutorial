import { Injectable, NestMiddleware, } from "@nestjs/common";
import { NextFunction, Request , Response  } from "express";


@Injectable()
export class UserMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // throw new Error("Method not implemented.");
        console.log('MiddleWare User from request')
        next();
    }
}