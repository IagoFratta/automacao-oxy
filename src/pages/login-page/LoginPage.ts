import { expect, Page } from "@playwright/test"
import dotenv from 'dotenv';
import { BasePage } from "../../pages"
import { PageUrls } from "../../utils";
import LoginForm from "./LoginForm"

dotenv.config();

export default class LoginPage extends BasePage {
    public loginForm: LoginForm;

    constructor(page: Page) {
        super(page, PageUrls.Login);
        this.loginForm = new LoginForm(this.page);
    }

    async visitarLogin(url: string) {
        await this.page.goto(url);
        await expect(this.page).toHaveTitle('Entrar em Oxy Elotech');
    }

    async logar() {
        const usuario = process.env.USUARIO;
        const senha = process.env.SENHA;
    
        if (!usuario || !senha) {
            throw new Error("Usuário ou senha não definidos nas variáveis de ambiente");
        }
    
        await this.loginForm.preencherFormulario(usuario, senha);
        await this.loginForm.submeterFormulario();
    }

    async confirmarLogin() {
        await expect(this.page.getByRole('banner').getByText('Central do Usuário')).toBeVisible();
    }
}