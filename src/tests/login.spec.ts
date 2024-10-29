import test from "@playwright/test";
import LoginPage from "../pages/login-page/LoginPage";

test('Deve logar com sucesso', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page)
    await loginPage.visitarLogin('/');
    await loginPage.login('72047885400', '8dBoLgdfwx');
    await loginPage.confirmarLogin();
})

test('Deve exibir mensagem de erro ao utilizar usuário ou senha inválidos', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page)
    await loginPage.visitarLogin('/');
    await loginPage.login('asxdawdawd', 'sdihbcvdsilu');
    await loginPage.loginForm.aguardarMensagemCredenciaisInvalidas();
})

test('Deve exibir aviso ao tentar logar com os campos vazios', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page)
    await loginPage.visitarLogin('/');
    await loginPage.loginForm.submeterFormulario()
    await loginPage.loginForm.aguardarMensagemCredenciaisInvalidas();
})