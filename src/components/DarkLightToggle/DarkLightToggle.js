'use client';
import React from 'react';
import { Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './DarkLightToggle.module.css';

function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // 1 — Change the state variable, for the sun/moon icon
    setTheme(nextTheme);

    // 2 — Update the cookie, for the user's next visit
    Cookie.set('color-theme', nextTheme, {
      expires: 1000,
    });

    // 3 — Update the DOM to present the new colors
    const root = document.documentElement;
    // 3.1 — Edit the data-attribute, so that we can apply CSS
    // conditionally based on the theme.
    root.setAttribute('data-color-theme', nextTheme);
  }

  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {theme === 'light' ? (
        <Sun size="1.5rem" />
      ) : (
        <Moon size="1.5rem" />
      )}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
