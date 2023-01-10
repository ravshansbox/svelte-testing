import { expect, test } from '@playwright/experimental-ct-svelte';
import Heading from '../../components/Heading.svelte';

test.use({ viewport: { width: 500, height: 500 } });

test('with title "Hello"', async ({ mount }) => {
  const component = await mount(Heading, { props: { title: 'Hello' } });
  await expect(component).toContainText('Hello');
  await expect(component).toHaveScreenshot();
});
