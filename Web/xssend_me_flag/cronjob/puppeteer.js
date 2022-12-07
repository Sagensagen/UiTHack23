const puppeteer = require("puppeteer");

const cookie = {
  name: "oauth",
  value: "12344566656",
  url: "http://motherload.td.org.uit.no:5000/admin",
};

(async () => {
  setTimeout(() => {
    browser.close();
  }, 3000);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setCookie(cookie);
  await page.goto("motherload.td.org.uit.no:5000/admin");
})();
