/*import { test, expect } from '@playwright/test';
import { Pagina } from '../core/Pagina';

let pageInstance: Pagina = new Pagina();
let locatorInput = '//input[@id="developer-name"]';
let locatorSubmit = '//input[@id="populate"]';
test('Step1 Laboratorio 3', async ({ page }) => {

    await page.goto(pageInstance.getLinkPage());
    let selectorInput = page.locator(locatorInput);
    await page.locator(locatorInput).fill('STEP1');
    test.setTimeout(60000)
    await page.locator(locatorSubmit).click();
    
    await expect(selectorInput).toHaveValue('STEP1');
});*/
