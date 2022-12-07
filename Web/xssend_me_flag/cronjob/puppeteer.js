const puppeteer = require("puppeteer");
document.cookie = "Session=123456789";
(async () => {
  setTimeout(() => {
    browser.close();
  }, 3000);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("motherload.td.org.uit.no:5000/admin");
})();
