import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { Toolbar } from 'react-native-material-ui';


const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View>
          <Toolbar
            leftElement="menu"
          />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
