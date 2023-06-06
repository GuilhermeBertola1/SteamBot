import page from "../app.js";
import Account from "../loadAccont/chooseAccount.js";

async function ChoosePag(){

    let FatormudaConta = 0;
              
    await page.goto('https://steamcommunity.com/groups/brdgamer/members/?p=' + paginaValue);
    paginaValue++;

    Account();

}