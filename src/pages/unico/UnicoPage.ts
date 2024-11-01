import { expect, Locator, Page } from "@playwright/test"
import { BasePage, PessoaPage } from "../../pages"
import { PageUrls } from "../../utils";

export default class UnicoPage extends BasePage {
    private readonly tituloUnico: Locator;
    private readonly pessoaPage: PessoaPage;

    constructor(page: Page) {
        super(page, PageUrls.Unico);
        this.tituloUnico = this.page.getByRole('banner').getByText('Único');
        this.pessoaPage = new PessoaPage(this.page);
    }

    async confirmarTituloUnico() {
        await expect(this.tituloUnico).toBeVisible();
    }
}