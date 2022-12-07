const puppeteer = require("puppeteer");

(async () => {
  setTimeout(() => {
    browser.close();
  }, 3000);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  var cookies = [
    {
      name: "sample-cookie1",
      value: "1",
      domain: "stackoverflow.com",
    },
    {
      name: "sample-cookie2",
      value: "2",
      domain: "pptr.dev",
    },
  ];

  await page.setCookie(...cookies);

  await page.goto("motherload.td.org.uit.no:5000/admin");
})();
