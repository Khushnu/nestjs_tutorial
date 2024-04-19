import { Injectable } from '@nestjs/common';

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


    finadAll(role?: 'Admin' | 'Customer') {

        if (role) {
            return this.user.filter(user => user.role === role);
        }
        return this.user;
    }

    findOne(id: number) {
        const user = this.user.find(user => user.id === id)
        return user;
    }

    create(user: { name: string, email: string, role: 'Admin' | 'Customer' }) {
        const userHighestId = [...this.user].sort((a, b) => b.id - a.id);
        const newUSer = {
            id: userHighestId[0].id + 1,
            ...user
        }
        this.user.push(newUSer);
        return newUSer;
    }
    //optional ? because we dont need some of them to update
    update(id: number, updatedUser: { name?: string, email?: string, role?: 'Admin' | 'Customer' }) {
        this.user = this.user.map(user => {
            if (user.id == id) {
                return { ...user, ...updatedUser }
            }
            return user;
        })
        // it will return one user
        return this.findOne(id);
    }

    deleteuser(id: number) {
        const deleteduserr = this.user.filter(user => user.id !== id);

        return deleteduserr;
    }

}
