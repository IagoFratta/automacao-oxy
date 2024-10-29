import { expect, Page } from "@playwright/test"
import BasePage from "../BasePage"
import LoginForm from "./LoginForm"

export default class LoginPage extends BasePage {
    public loginForm: LoginForm;

    constructor(page: Page) {
        super(page);
        this.loginForm = new LoginForm(this.page);
    }

    async visitarLogin(url: string) {
        await this.page.goto(url);
        await expect(this.page).toHaveTitle('Entrar em Oxy Elotech');
    }

    async login(user: string, password: string) {
        await this.loginForm.preencherFormulario(user, password);
        await this.loginForm.submeterFormulario();
    }

    async confirmarLogin() {
        await expect(this.page.getByRole('banner').getByText('Central do Usuário')).toBeVisible();
    }
}