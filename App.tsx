import React, {useState, useEffect} from 'react';
import {useColorScheme, Appearance} from 'react-native';
import {ThemeProvider} from 'styled-components';
import getTheme from './theme';

import Login from './src/screens/Login';

const App = () => {
  const scheme = useColorScheme();
  const [themeScheme, setThemeScheme] = useState(scheme);

  const _handleAppearanceStateChange = () => {
    const newColorScheme = Appearance.getColorScheme();
    setThemeScheme(newColorScheme);
  };

  useEffect(() => {
    Appearance.addChangeListener(_handleAppearanceStateChange);
  }, []);
  return (
    <ThemeProvider theme={getTheme(themeScheme)}>
      <Login opening={true} />
    </ThemeProvider>
  );
};

export default App;
