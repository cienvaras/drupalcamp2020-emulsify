import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../../util/loadYaml';
import { setupTwig } from '../../../../.storybook/setupTwig';

setupTwig(Twig);

describe('link', () => {
  it('can render a link', async () => {
    const { container } = await render(
      join(__dirname, 'link.twig'),
      loadYaml(join(__dirname, 'link.yml')),
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        


        <a
          class="link"
          href="https://github.com/drupalcamp2020-ds/drupalcamp2020-design-system"
          target="_blank"
        >
          
            This is my link text
        
        </a>
        

      </div>
    `);
  });
});
