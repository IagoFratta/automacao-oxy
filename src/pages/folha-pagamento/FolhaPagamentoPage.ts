import { expect, Locator, Page } from "@playwright/test"
import { BasePage } from "../../pages"
import { PageUrls } from "../../utils";

export default class FolhaPagamentoPage extends BasePage {
    private readonly tituloFolhaPagamento: Locator;

    constructor(page: Page) {
        super(page, PageUrls.FolhaPagamento);
        this.tituloFolhaPagamento = this.page.getByRole('banner').getByText('Folha de Pagamento');
    }

    async confirmarTituloFolhaPagamento() {
        await expect(this.tituloFolhaPagamento).toBeVisible();
    }
}