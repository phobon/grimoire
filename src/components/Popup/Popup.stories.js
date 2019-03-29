import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Text } from '@phobon/base';
import Popup from './Popup';
import Avatar from '../Avatar';

const Content = () => (
  <Fragment>
    <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z" fill="#6FCF97"/>
    </svg>
    <Text>Content</Text>
  </Fragment>
);

const buttonVariants = [
  'primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'subtle', 'link', 'clean',
];

storiesOf('Components/Popups', module)
  .add('With and without labels', () => (
    <Box>
      <Popup trigger="with label" mr={3}>
        <Content />
      </Popup>

      <Popup>
        <Content />
      </Popup>
    </Box>
  ))
  .add('With varying alignment', () => (
    <Box fullWidth justifyContent="space-between" style={{ height: '100vh' }} pb={6}>
      <Box fullHeight flexDirection="column" justifyContent="space-between">
        <Popup trigger="opens down">
          <Content />
        </Popup>
        <Popup trigger="opens up">
          <Content />
        </Popup>
      </Box>
      <Box fullHeight flexDirection="column" justifyContent="space-between">
        <Popup trigger="opens down">
          <Content />
        </Popup>
        <Popup trigger="opens up">
          <Content />
        </Popup>
      </Box>
    </Box>
  ))
  .add('With defined directional popup alignment', () => (
    <Box fullWidth justifyContent="space-between" style={{ height: '100vh' }} pb={6}>
      <Box fullHeight flexDirection="column" justifyContent="space-between">
        <Popup trigger="left opens down" popupDirection="left">
          <Content />
        </Popup>
        <Popup trigger="left opens up" popupDirection="left">
          <Content />
        </Popup>
      </Box>
      <Box fullHeight flexDirection="column" justifyContent="space-between">
        <Popup trigger="right opens down" popupDirection="right">
          <Content />
        </Popup>
        <Popup trigger="right opens up" popupDirection="right">
          <Content />
        </Popup>
      </Box>
    </Box>
  ))
  .add('With alternate triggers', () => (
    <Popup trigger={<Avatar name="Cool McDude" status="warning" presence="unknown" />} variant="clean">
      <Content />
    </Popup>
  ))
  .add('With button variants', () => (
    buttonVariants.map(a => (
      <Popup key={a} variant={a} trigger={a} mx={2}>
        <Content />
      </Popup>
    ))
  ))
  .add('With defined directions', () => (
    <Box fullWidth justifyContent="space-between">
      <Popup trigger="opens down" popupDirection="down" mr={3}>
        <Content />
      </Popup>
      <Popup trigger="opens up" popupDirection="up" mr={3}>
        <Content />
      </Popup>
      <Popup trigger="opens left" popupDirection="left" mr={3}>
        <Content />
      </Popup>
      <Popup trigger="opens right" popupDirection="right">
        <Content />
      </Popup>
    </Box>
  ));