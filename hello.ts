interface User {
     id: number;
    readonly username: string;
}

const user : User = {   
    id: 1,
    username: 'alex'
}

user.id = 2;
user.username = 'sdf'