import { test as base } from 'playwright/test';
import { Client } from 'pg';
import dotenv from 'dotenv';
import { LoginPage, FolhaPagamentoPage, UnicoPage, PessoaPage } from '../pages';

dotenv.config();

export const test = base.extend<{
    database: Client,
    loginPage: LoginPage,
    folhaPagamentoPage: FolhaPagamentoPage,
    unicoPage: UnicoPage,
    pessoaPage: PessoaPage
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
        await folhaPagamentoPage.visitar();
        await loginPage.logar();
        await folhaPagamentoPage.confirmarTituloFolhaPagamento();
        await use(folhaPagamentoPage);
    },
    unicoPage: async ({ page, loginPage }, use) => {
        const unicoPage = new UnicoPage(page);
        await unicoPage.visitar()
        await loginPage.logar();
        await unicoPage.confirmarTituloUnico();
        await use(unicoPage);
    },
    pessoaPage: async ({ page, loginPage }, use) => {
        const pessoaPage = new PessoaPage(page);
        await pessoaPage.visitar();
        await loginPage.logar();
        await pessoaPage.confirmarPessoaPage();
        await use(pessoaPage);
    }
});
