import puppeteer from "puppeteer";
import fs from "fs";
import { promises } from "dns";

let url = 'https://steamcommunity.com/groups/brdgamer/members/?p=2';

let paginaValue = 6;
let div = 1;
let lista = [];
let listaMudaConta = [1,2,3,5,6,7,9,10,
  11,13,14,15,17,18,19,
  21,22,23,25,26,27,29,
  30,31,33,34,35,37,38,39,
  41,42,43,45,46,47,49,
  50,51,53,54,55,57,58,59,
  61,62,63,65,66,67
];

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    console.log("teste iniciado");

    await page.goto(url);
    console.log("entrei no site");

    await page.waitForSelector("#memberList");
    console.log("foi");

    await Promise.all([
        page.waitForNavigation(),
        page.click("#memberList > div:nth-child(1)")
    ]);

    await page.waitForTimeout(2000);
    await browser.close();
})();
