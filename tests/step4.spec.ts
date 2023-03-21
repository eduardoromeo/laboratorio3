import { test, expect } from '@playwright/test';
import { Pagina } from '../core/Pagina';

let paginaInstancia = new Pagina();
let selectorCombo = '//select[@id="preferred-interface"]';
let arrayOptions = ['JavaScript API', 'Both', 'Command Line'];

test('Step4 Laboratorio 3', async ({ page }) => {
    await page.goto(paginaInstancia.getLinkPage());
    let elementSelect = page.locator(selectorCombo);
    await elementSelect.selectOption(arrayOptions[2]);
    await expect(elementSelect).toHaveValue(arrayOptions[2]);
});