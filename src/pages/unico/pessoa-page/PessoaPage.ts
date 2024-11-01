import { expect, Page } from "@playwright/test"
import { BasePage } from "../../../pages"
import { PageUrls } from "../../../utils";

export default class PessoaPage extends BasePage {

    constructor(page: Page) {
        super(page, PageUrls.Pessoa);
    }

    async confirmarPessoaPage() {
        await expect(this.page.getByRole("button", { name: 'Novo' })).toBeVisible({ timeout: 10000 });
    }
}