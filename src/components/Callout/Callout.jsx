import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../..';
import statuses from '../../utils/devUtils/constants/statuses';

import { NoticeIcon } from './NoticeIcon';

export const CALLOUT_TEST_ID = 'CalloutTestId';

const var2 = () => ({ color: 'text.secondary' });

const getProp = (prop, status) => {
  if (prop === 'color') {
    if (status === statuses.DEFAULT) {
      return 'text.secondary';
    }

    if (status === 'error') {
      return 'critical.bright';
    }

    if (status === statuses.SUCCESS) {
      return 'critical.bright';
    }

    if (status === statuses.WARNING) {
      return 'warn.bright';
    }
  }

  if (prop === 'variant') {
    if (status === statuses.DEFAULT) {
      return 'callout.base';
    }

    if (status === statuses.ERROR) {
      return 'callout.error';
    }

    if (status === statuses.SUCCESS) {
      return 'callout.success';
    }

    if (status === statuses.WARNING) {
      return 'callout.warning';
    }
  }
};

const var1 = {
  mr: 'md',
  ml: 'md',
  size: 'md',
};

/**
 Please note, Callout is a static component, the [Messages](./?path=/docs/components-messages)
 component is recommended if you need to interrupt and notify users of successful/failed actions
 or give warnings of unexpected events.
 */

const Component = forwardRef(({
  children, status = 'default', ...others
}, ref) => (
  <Box
    ref={ref}
    data-testid={CALLOUT_TEST_ID}
    isRow
    role="note"
    variant={getProp('variant', status)}
    {...others}
  >
    <NoticeIcon
      color={getProp('color', status)}
      status={status}
      aria-label={`${status}-icon`}
      {...var1}
    />
    {children}
  </Box>
));

Component.displayName = 'Callout';

Component.propTypes = {
  status: PropTypes.string,
};

export default Component;
