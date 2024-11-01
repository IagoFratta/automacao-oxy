import { Page } from "@playwright/test";
import { PageUrls } from "../utils";

export default class BasePage {
    protected page: Page;
    protected url: PageUrls;

    constructor(page: Page, url: PageUrls) {
        this.page = page;
        this.url = url;
    }

    async clicarBotao(nomeBotao: string) {
        await this.page.getByRole("button", { name: nomeBotao, exact: true }).click();
    }

    async visitar() {
        await this.page.goto(this.url);
    }
}