import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Text } from '@phobon/base';

const PageHeader = ({ heading, tagLine, actions, children, ...props }) => {
  let tagLineControl = null;
  if (tagLine) {
    tagLineControl = React.isValidElement(tagLine) ? tagLine : (
      <Text fontSize={0} color="grayscale.3">{tagLine}</Text>
    );
  }

  return (
    <Box fullWidth flexDirection="column" alignItems="flex-start" {...props}>
      {tagLineControl}

      <Box fullWidth justifyContent="space-between" mb={children && 2} alignItems="flex-start">
        <Heading.H3>{heading}</Heading.H3>
        {actions}
      </Box>

      {children}
    </Box>
  );
};

PageHeader.displayName = 'PageHeader';

PageHeader.propTypes = {
  ...Box.propTypes,
  
  /** Heading to display */
  heading: PropTypes.string.isRequired,

  /** Tagline to display above the heading */
  tagLine: PropTypes.string,

  /** Actions that vertically align with the heading, but are horizontally aligned to the right */
  actions: PropTypes.node,

  /** Children */
  children: PropTypes.node,

  px: PropTypes.number,
  py: PropTypes.number,
};

PageHeader.defaultProps = {
  tagLine: null,
  actions: null,
  children: null,
  px: 3,
  py: 3,
};

export default PageHeader;