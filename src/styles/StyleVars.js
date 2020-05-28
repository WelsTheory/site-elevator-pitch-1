import React from 'react';
import { Global, css } from '@emotion/core';

import 'typeface-open-sans';

const COLORS = [
  '#000000',
  '#2E8857',
  '#FFFFFF',
  '#FFFFFF',
]

const StyleVars = () => (
  <Global
    styles={css`
      :root {
        --accentColor: #c00;
        --backgroundColor: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        --lastBackgroundColor: #333;
        --transitionBackgroundColor: #ddd;
        --textColor: #F2F0EB;
        --brightTextColor: #aaa;
        --fontFamily: 'Open Sans', Arial, sans-serif;
        --linkColor: #CDDC39;
        --hoverLinkColor: #9E9E9E;
        --brightLinkColor: #ddd;
      }
    `}
  />
);

export default StyleVars;
