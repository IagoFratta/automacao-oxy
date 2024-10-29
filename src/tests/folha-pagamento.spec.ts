import { test } from "../fixtures/fixtures";
import LoginPage from "../pages/login-page/LoginPage";
import FolhaPagamentoPage from "../pages/folha-pagamento/FolhaPagamentoPage";

test('Deve logar com sucesso', async ({ folhaPagamentoPage }) => {
    console.log(folhaPagamentoPage.url)
})