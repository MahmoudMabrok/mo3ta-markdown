# mo3ta-markdown ![NPM Version](https://img.shields.io/npm/v/mo3ta-markdown)  [![Known Vulnerabilities](https://snyk.io/test/github/MahmoudMabrok/mo3ta-markdown/badge.svg)](https://snyk.io/test/github/MahmoudMabrok/mo3ta-markdown)

This project is a fork of [react-native-markdown-display](https://github.com/iamacup/react-native-markdown-display), created to address maintenance gaps and introduce improvements.

# Installation


```bash
npm i mo3ta-markdown
```
See the package on [npm](https://www.npmjs.com/package/@mo3ta-dev/react-native-markdown-display).

# New Features

## Sample App

- Try out the library in the included sample app.
- The sample app will be updated with practical examples and tips.

## Enhanced `onLinkPress`

- The `onLinkPress` callback now provides both the URL and the clicked text, enabling use cases like analytics for link clicks.

```jsx
<Markdown
  onLinkPress={(url, text) => {
    // Handle link press
    console.log('Link pressed:', url);
    console.log('Link text:', text);
    return false; // Adjust logic as needed
  }}
>
  {markdown}
</Markdown>
```

## Security and Linting Improvements

- Upgraded `markdown.it` to address vulnerabilities.
- Fixed lint issues and added ESLint checks for better pre-commit workflows.
