import { Given, When, Then } from 'cucumber';
import assert from 'cucumber-assert';

Given(/^I open the (url|site) "([^"]*)?"$/, function(type, page) {
  const url = (type === 'url') ? page : browser.options.baseUrl + page;
  browser.url(url);
});

Then(/^I expect that the title is "([^"]*)?"$/, function(expectedTitle) {
  const title = browser.getTitle();
  assert.equal(title, expectedTitle, `Found title as '${title}', But expected it to be '${expectedTitle}'`);
});

