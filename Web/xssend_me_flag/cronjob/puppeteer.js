const puppeteer = require("puppeteer");

(async () => {
  setTimeout(() => {
    browser.close();
  }, 3000);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("http://http://127.0.0.1:5000");
})();
