import { expect, Page } from "@playwright/test"
import BasePage from "../../BasePage"

export default class FolhaHomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
}