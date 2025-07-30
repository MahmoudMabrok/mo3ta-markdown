# mo3ta-markdown ![NPM Version](https://img.shields.io/npm/v/mo3ta-markdown)

This fork from [react-native-markdown-display](https://github.com/iamacup/react-native-markdown-display) as it not maintained for long time, and i wanted to add and fix some points. 

## New Features 
### Add SampleApp 
- Now you can try the lib in sample app. 
- Will be updated to have real examples and tricks. 

### Improve onLinkPress 
- I needed to have the text clicked on, not only the link, this would help in situation when i want to add analytics for clciking on links. 

```jsx
<Markdown
          onLinkPress={(url, text) => {
            // Handle link press
            console.log('Link pressed:', url);
            console.log('Link text:', text);
            return false; // or false, depending on your logic
          }}
        >{markdown}</Markdown>
```
