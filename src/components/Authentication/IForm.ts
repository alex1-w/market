export interface IEmailPassword {
    login: string;
    password: string;
}

export interface ISignInForm extends IEmailPassword {
    repeatPassword: string;
}