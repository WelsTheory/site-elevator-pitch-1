import React from 'react';
import { Global, css } from '@emotion/core';

import 'typeface-open-sans';

const COLORS = [
  '#2E8857',
  '#2E8857',
  '#2E8857',
  '#2E8857',
]

const StyleVars = () => (
  <Global
    styles={css`
      :root {
        --accentColor: #FFF;
        --backgroundColor: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        --lastBackgroundColor: #000;
        --transitionBackgroundColor: #FFF;
        --textColor: #F2F0EB;
        --brightTextColor: #FFF;
        --fontFamily: 'Lato', Bold, sans-serif;
        --linkColor: #000;
        --hoverLinkColor: #888888;
        --brightLinkColor: #ddd;
      }
    `}
  />
);

export default StyleVars;
//--fontFamily: 'Open Sans', Arial, sans - serif;
