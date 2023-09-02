export interface IUserService {
    login: string;
    password: string;
}

export interface IUserInfo extends IUserService {
    id: number
    role: 'User' | 'Admin'
}