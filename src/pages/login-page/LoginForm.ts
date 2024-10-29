import { expect, Locator, Page } from "@playwright/test"
import BasePage from "../BasePage"

export default class LoginForm extends BasePage {
    private campoUsuario: Locator;
    private campoSenha: Locator;
    private botaoEntrar: Locator;
    private mensagemCredenciaisInvalidas: Locator;

    constructor(page: Page) {
        super(page);
        this.campoUsuario = this.page.getByPlaceholder('Usuário');
        this.campoSenha = this.page.getByPlaceholder('Senha');
        this.botaoEntrar = this.page.getByRole("button", { name: 'Entrar' });
        this.mensagemCredenciaisInvalidas = this.page.locator('#kc-container-wrapper div').filter({ hasText: 'Nome de usuário ou senha inválida.' });
    }

    async preencherFormulario(user: string, password: string) {
        await this.campoUsuario.fill(user);
        await this.campoSenha.fill(password);
    }

    async submeterFormulario() {
        await this.botaoEntrar.click();
    }

    async aguardarMensagemCredenciaisInvalidas() {
        await expect(this.mensagemCredenciaisInvalidas).toBeVisible();
    }
}