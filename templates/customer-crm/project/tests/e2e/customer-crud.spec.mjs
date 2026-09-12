import {test,expect} from '../testkit/apex.mjs';
// The runner supplies this fixture in its isolated run directory.
// Runtime evidence is required before this fixture can be called verified.
test('authenticated customer CRUD and invalid email',async({page})=>{
 const suffix=crypto.randomUUID().replaceAll('-','');const name=`APEXREST ${suffix}`,updated=`Updated ${suffix}`,email=`${suffix}@example.test`;
 await page.goto('./customers');await expect(page.getByTestId('apexrest-crm')).toBeVisible();
 await page.getByRole('button',{name:'Create Customer',exact:true}).click();
 let form=page.frameLocator('iframe[title="Customer"]');
 await form.getByLabel('Name',{exact:true}).fill(name);await form.getByLabel('Email',{exact:true}).fill('invalid');await form.getByLabel('Status',{exact:true}).selectOption('ACTIVE');
 await form.getByRole('button',{name:'Create',exact:true}).click();await expect(form.getByText('Enter a valid email address.',{exact:false})).toBeVisible();
 await form.getByLabel('Email',{exact:true}).fill(email);await form.getByRole('button',{name:'Create',exact:true}).click();await expect(page.locator('iframe[title="Customer"]')).toHaveCount(0);
 try {
  await page.locator('#customers_report_search_field').fill(name);await page.locator('#customers_report_search_field').press('Enter');await expect(page.getByRole('cell',{name,exact:true})).toBeVisible();
  await page.getByRole('row').filter({has:page.getByRole('cell',{name,exact:true})}).getByRole('link',{name:'Edit customer'}).click();
  form=page.frameLocator('iframe[title="Customer"]');await expect(form.getByLabel('Email',{exact:true})).toHaveValue(email);await form.getByLabel('Name',{exact:true}).fill(updated);await form.getByRole('button',{name:'Apply Changes',exact:true}).click();await expect(page.locator('iframe[title="Customer"]')).toHaveCount(0);
  await page.locator('#customers_report_search_field').fill(updated);await page.locator('#customers_report_search_field').press('Enter');await expect(page.getByRole('cell',{name:updated,exact:true})).toBeVisible();
 } finally {
  await page.locator('#customers_report_search_field').fill(suffix);await page.locator('#customers_report_search_field').press('Enter');
  const row=page.getByRole('row').filter({has:page.getByRole('cell',{name:email,exact:true})});
  if(await row.count()){
   await row.getByRole('link',{name:'Edit customer'}).click();form=page.frameLocator('iframe[title="Customer"]');await form.getByRole('button',{name:'Delete',exact:true}).click();
   await form.getByRole('dialog').getByRole('button',{name:'Delete',exact:true}).click();await expect(page.locator('iframe[title="Customer"]')).toHaveCount(0);await expect(page.getByRole('cell',{name:email,exact:true})).toHaveCount(0);
  }
 }
});
