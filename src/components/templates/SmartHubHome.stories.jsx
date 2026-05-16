import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import SmartHubHome from './SmartHubHome';
import { smarthubTheme } from '../../styles/themes/smarthubTheme';

export default {
  title: 'Page/SmartHubHome',
  component: SmartHubHome,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (StoryComponent) => (
      <ThemeProvider theme={ smarthubTheme }>
        <CssBaseline />
        { React.createElement(StoryComponent) }
      </ThemeProvider>
    ),
  ],
  argTypes: {
    hospitalName: {
      control: 'text',
      description: '헤더와 히어로에 표시할 병원명',
    },
  },
};

export const Default = {
  args: {
    hospitalName: '스마트허브병원',
  },
};
