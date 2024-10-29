import { Page } from "@playwright/test";

export default class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clicarBotao(nomeBotao: string) {
        await this.page.getByRole("button", { name: nomeBotao, exact: true }).click();
    }
}