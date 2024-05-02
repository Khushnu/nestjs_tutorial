import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class UserGuard implements CanActivate {

    public key: string = 'waaaaa';

    canActivate(context: ExecutionContext)
    : boolean | 
    Promise<boolean> |
     Observable<boolean> {
      const ctx = context.switchToHttp(); 
      const req = ctx.getRequest<Request>()
      console.log('User guard is in action ');

      if(req.header('key') == undefined) return false;
      return req.header('key') === this.key;
    }
}