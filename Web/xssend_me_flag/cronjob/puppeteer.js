const puppeteer = require("puppeteer");

(async () => {
  setTimeout(() => {
    browser.close();
  }, 3000);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.evaluate(() => {
    document.cookie =
      "oauth=12344566656; path=/; domain=motherload.td.org.uit.no:5000";
  });
  await page.goto("motherload.td.org.uit.no:5000/admin");
})();
