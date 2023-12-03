import { test, expect } from '@playwright/test';

test('should create a bug report', async ({ request }) => {
  const newIssue = await request.get(`http://localhost:3030/`, {
    data: {
      title: '[Bug] report 1',
      body: 'Bug description',
    },
  });
  expect(newIssue.ok()).toBeTruthy();
});
