import MySql from '../modules/mysql'

class User{
    username: string | undefined;
    password: string | undefined;
}

var userModel = new MySql<User>();

export {User,userModel}