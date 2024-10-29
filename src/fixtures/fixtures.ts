import { test as base } from 'playwright/test';
import { Client } from 'pg';
import LoginPage from '../pages/login-page/LoginPage';
import dotenv from 'dotenv';
import FolhaPagamentoPage from '../pages/folha-pagamento/FolhaPagamentoPage';

dotenv.config();

export const test = base.extend<{
    database: Client,
    loginPage: LoginPage,
    folhaPagamentoPage: FolhaPagamentoPage,
}>({
    database: async ({ }, use) => {
        const client = new Client({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT || '5432', 10),
        });

        await client.connect();
        await use(client);
        await client.end();
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    folhaPagamentoPage: async ({ page, loginPage }, use) => {
        const folhaPagamentoPage = new FolhaPagamentoPage(page);
        await loginPage.visitarLogin(folhaPagamentoPage.url)
        await loginPage.login('72047885400', '8dBoLgdfwx');
        await folhaPagamentoPage.confirmarTituloFolhaPagamento();
        await use(folhaPagamentoPage);
    }
});
