# Web components for zoom a image
use react-inner-image-zoom to build a web component. So you can use it on other framework.

# Build the component
```sh
cd wc-react-inner-image-zoom
yarn
yarn build
```

# Example on vue 3
1. copy all files in `dist/assets/*`
2. paste all files in `public` folder of your vue project
3. add lines code to your `index.html` in `thead` tag
```html
    <script type="module" crossorigin src="/assets/index.xxx.js"></script>
    <link rel="modulepreload" href="/assets/vendor.xxx.js">
    <link rel="stylesheet" href="/assets/index.xxx.css">
```
4. Config you vue project. for example in your `vite.config.js` inside `plugins`.
### From
```js
vue()
```
### To
```js
vue({
    template: {
        compilerOptions: {
            isCustomElement: tag => tag.startsWith('wc-')
        }
    }
})
```