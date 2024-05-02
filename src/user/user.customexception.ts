import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

import { Request, Response } from "express";


@Catch(HttpException)
export class UserCustomException implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
       
        const context = host.switchToHttp(); 
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        const status = exception.getStatus();

        response.status(status).json({
            status : status, 
            url : request.url, 
            time: new Date().toISOString(), 
            host: request.hostname
        })

    }

}