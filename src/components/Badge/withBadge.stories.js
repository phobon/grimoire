import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@phobon/base';

import withBadge from './withBadge';

const BadgeBox = withBadge(Box);

storiesOf('Components/Badge/withBadge', module)
  .add('With different positioning', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <BadgeBox badge="1" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="2" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="3" badgePosition="bottomleft" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="4" badgePosition="bottomright" mb={4} width={48} height={48} bg="grayscale.7" />
    </Box>
  ))
  .add('With different colours', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <BadgeBox badge="1" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="2" badgeBg="blues.3" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="3" badgeBg="reds.3" badgePosition="bottomleft" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="4" badgeBg="purples.3" badgePosition="bottomright" mb={4} width={48} height={48} bg="grayscale.7" />
    </Box>
  ))
  .add('With different text length', () => (
    <Box fullWidth fullHeight flexDirection="column" alignItems="flex-start">
      <BadgeBox badge="10" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="100" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="Word" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
      <BadgeBox badge="Lots of words" badgePosition="topright" mb={4} width={48} height={48} bg="grayscale.7" />
    </Box>
  ));