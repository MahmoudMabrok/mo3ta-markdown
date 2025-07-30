/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, ScrollView, Text } from 'react-native';
import Markdown from 'mo3ta-markdown';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const markdown = `
  # React Native Markdown Display\n\n+  This is a **sample** markdown rendered using your local library.\n\n+  - List item 1\n+  - List item 2\n\n+  [Learn more](https://github.com/iamacup/react-native-markdown-display). [Learn more 222](https://github.com/iamacup/react-native-markdown-display)
  `;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{ padding: 16, fontSize: 18, color: isDarkMode ? '#fff' : '#000' }}>
        React Native Markdown Display
      </Text>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Markdown
          onLinkPress={(url, text) => {
            // Handle link press
            console.log('Link pressed:', url);
            console.log('Link text:', text);
            return false; // or false, depending on your logic
          }}
        >{markdown}</Markdown>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
