const { AxePuppeteer } = require('@axe-core/puppeteer')
const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

async function runAxe() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000')
  const results = await new AxePuppeteer(page).analyze()
  const reportPath = path.join(__dirname, '../reports/axe-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2))
  await browser.close()
  console.log('Axe accessibility report generated at', reportPath)
  console.log(`Violations: ${results.violations.length}`)
  console.log(`Passes: ${results.passes.length}`)
}

runAxe().catch(console.error)