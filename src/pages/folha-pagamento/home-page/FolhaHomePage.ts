import { Page } from "@playwright/test"
import { BasePage } from "../../../pages"
import { PageUrls } from "../../../utils";

export default class FolhaHomePage extends BasePage {

    constructor(page: Page) {
        super(page, PageUrls.FolhaHomePage);
    }
}