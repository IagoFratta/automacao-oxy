import { expect, Locator, Page } from "@playwright/test"
import BasePage from "../BasePage"

export default class FolhaPagamentoPage extends BasePage {
    public url: string
    private readonly tituloFolhaPagamento: Locator;

    constructor(page: Page) {
        super(page);
        this.url = '/folha-pagamento';
        this.tituloFolhaPagamento = this.page.getByRole('banner').getByText('Folha de Pagamento');
    }

    async visitarFolhaPagamento() {
        await this.page.goto(this.url);
    }

    async confirmarTituloFolhaPagamento() {
        await expect(this.tituloFolhaPagamento).toBeVisible();
    }
}