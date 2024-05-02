import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { Request, Response } from "express";
import { CreateUserDTO } from "./dto/userDto";


export class UserInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>) : Observable<any> | Promise<Observable<any>> 
    {       

        let startTime =  Date.now();
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
       return next.handle().pipe(tap(() => {
        const endTime = Date.now();
        const resultTime = startTime - endTime;
        console.log(`Request Method ${req.method}, Url localhost:3000${req.url}  at ${resultTime}ms `)
       }));
    }
    
}