import { test, expect } from '@playwright/test';
import { Pagina } from '../core/Pagina';

let pageInstance: Pagina = new Pagina();
let arrayChecks = [
    '//input[@id="remote-testing"]',
    '//input[@id="reusing-js-code"]',
    '//input[@id="background-parallel-testing"]',
    '//input[@id="continuous-integration-embedding"]',
    '//input[@id="traffic-markup-analysis"]'
]
test('Step3 Laboratorio 3', async ({ page }) => {
    await page.goto(pageInstance.getLinkPage());
    for (let i = 0; i < arrayChecks.length; i++) {
        let elementCheck = page.locator(arrayChecks[i]);
        await elementCheck.click()
    }
});


