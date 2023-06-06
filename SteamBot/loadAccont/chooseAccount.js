import page from "../app.js";
import fs from "fs";

let lista = [];
let listaMudaConta = [
    1,2,3,5,6,7,9,10,11,
    13,14,15,17,18,19,21,
    22,23,25,26,27,29,30,
    31,33,34,35,37,38,39,
    41,42,43,45,46,47,49,
    50,51,53,54,55,57,58,
    59,61,62,63,65,66,67
];

async function Account(){

    await page.waitForTimeout(2000);
    const conta = await page.waitForXPath('//*[@id="memberList"]/div[' + listaMudaConta[FatormudaConta] + ']/div[1]/a');
    await conta.click();
    await page.waitForTimeout(2000);

    await page.waitForSelector('.profile_header_summary');
    const quantidadeItens = await page.evaluate(()=>{
        const elementos = document.querySelector('.profile_header_summary').textContent;
        return elementos;
    });

    if(quantidadeItens.length >= 196){
  
        await page.waitForSelector('.friendPlayerLevelNum');
        const level = await page.evaluate(()=>{
          const contalevel = document.querySelector('.friendPlayerLevelNum').textContent;
          return contalevel;
        });
  
        if(level == 0){

            await page.waitForSelector('.profile_header_badgeinfo_badge_area');
            const links = await page.evaluate(()=>{
              const link22 = document.querySelector('.profile_header_badgeinfo_badge_area').baseURI;
              return link22;
            });

            lista.push(links);

            fs.writeFile('listaDeContas.json', JSON.stringify(lista, null, 2), err =>{
                if(err) throw new Error('something went wrong');
                console.log('sucessfuly');
            });

            await page.goBack();

        }else{
                
            await page.goBack();
                
        }

    }else if(quantidadeItens.length <= 95){
        
        await page.goBack();

    }

}

export default Account;