const puppeteer = require("puppeteer");

(async () => {
  setTimeout(() => {
    browser.close();
  }, 3000);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  await page.setCookie({ Session: "eyJ1c2Vy" });
  const page = await browser.newPage();

  await page.goto("motherload.td.org.uit.no:5000/admin");
})();
