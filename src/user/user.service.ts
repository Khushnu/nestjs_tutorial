import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './dto/userDto';
import { UpdateUserDTO } from './dto/updateUserDTO';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {

    private user = [
        {
            'id': 1,
            'name': 'Jimmy, K',
            'email': 'kjimmy@gmail.com',
            'role': 'Admin'
        },
        {
            'id': 2,
            'name': 'Lessie, J',
            'email': 'lessie3@work.com',
            'role': 'Customer'
        },
        {
            'id': 3,
            'name': 'Jhonny',
            'email': 'lagaey@outlook.com',
            'role': 'Customer'
        },
        {
            'id': 4,
            'name': 'Scott Lang',
            'email': 'lang@yahoo.com',
            'role': 'Admin'
        }
    ]

    finadAll(role?: 'Admin' | 'Customer'){
        if(role){
            const userArray = this.user.filter((a) => a.role == role); 
            if(userArray.length === 0) throw new NotFoundException('User not Found for Role')
            return userArray;
        }
        return this.user;
    }


    findOne(id: number ,){
        const userOne = this.user.find((a) => a.id === id); 
        if(!userOne) throw new NotFoundException(`User Id:${id} Not Found `);
        return userOne;
    }


    create(createUser: CreateUserDTO){
        const idHighist = [...this.user].sort((a, b) => b.id - a.id);
       const userAdded = {
        id: idHighist[0].id + 1, 
        ...createUser
       }
       this.user.push(userAdded);
       return userAdded
    }
    
    update(id:number, userUpdate: UpdateUserDTO){
        const userupdate = this.user.map((a) => {
            if(a.id === id){
                return {...this.user, ...userUpdate}
            } 
            return this.user; 
        })
        return this.findOne(id);
    }

    deleteuser(id: number){
        const reduceid = [...this.user].sort((a,b) => b.id + a.id) 
        const useer = this.user.find((a)=> a.id !== id);
        // const useer = this.user.filter((a) => a.id !== id);
        return useer;
    }  
}