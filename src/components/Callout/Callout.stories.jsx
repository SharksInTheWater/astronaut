import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import DocsLayout from '../../../.storybook/storybookDocsLayout.js';
import {
  Link,
  Text,
} from '../../index';
import { FIGMA_LINKS } from '../../utils/designUtils/figmaLinks';
import statuses from '../../utils/devUtils/constants/statuses.js';
import { statusArgTypes } from '../../utils/docUtils/statusProp.js';

import Component from './Callout';
import CalloutReadme from './Callout.mdx';

export default {
  title: 'Components/Callout',
  component: Component,
  decorators: [withDesign],
  argTypes: {
    ...statusArgTypes,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      page: () => (
        <>
          <CalloutReadme />
          <DocsLayout />
        </>
      ),
    },
  },
};

// main
export const Default = args => (
  <Component {...args}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quisque vitae lacinia diam, nec ullamcorper neque.
      In egestas dui vel dolor tincidunt, sit amet ullamcorper leo consequat.
    </Text>
  </Component>
);

Default.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_LINKS.callout.default,
  },
};

export const ErrorStatus = () => (
  <Component status={statuses.ERROR}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quisque vitae lacinia diam, nec ullamcorper neque.
      In egestas dui vel dolor tincidunt, sit amet ullamcorper leo consequat.
      Etiam at urna erat.
    </Text>
  </Component>
);

ErrorStatus.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_LINKS.callout.errorStatus,
  },
};

// Avoiding using Error as the function name due to it being a JS built-in method
ErrorStatus.storyName = 'Error';

export const Success = () => (
  <Component status={statuses.SUCCESS}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quisque vitae lacinia diam, nec ullamcorper neque.
      In egestas dui vel dolor tincidunt, sit amet ullamcorper leo consequat.
    </Text>
  </Component>
);

Success.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_LINKS.callout.success,
  },
};

export const WithLink = args => (
  <Component {...args}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quisque vitae lacinia diam, nec ullamcorper neque.
      In egestas dui vel dolor tincidunt, sit amet ullamcorper leo consequat.
      {' '}
      <Link
        href="https://pingidentity.com"
        target="_blank"
        aria-label={`${statuses.SUCCESS}-callout read more`}
        variant="app"
      >
        Learn More
      </Link>
    </Text>
  </Component>
);

WithLink.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_LINKS.callout.withLink,
  },
};
export const Warning = () => (
  <Component status={statuses.WARNING}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quisque vitae lacinia diam, nec ullamcorper neque.
      In egestas dui vel dolor tincidunt, sit amet ullamcorper leo consequat.
    </Text>
  </Component>
);

Warning.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_LINKS.callout.warning,
  },
};
