---
sidebar_position: 1
---

# React JS
  
TreeSpider can run in React JS applications, this documentation uses React JS and it runs TreeSpider, the following are the steps to running TreeSpider in a React JS application.  
  
## Installation
  
To install TreeSpider in React JS, run 

```bash
npm i treespider
```

This will install TreeSpider, next import TreeSpider in your application

## Usage

Import TreeSpider.

```ts
import TreeSpider from 'treespider';
```
  
Next, add the CSS file to the index.js/ts file,  
  
```ts
import "treespider/dist/css/treeSpider.css"
```
  
Next, initialize it
  
```tsx title="src/ExampleComponent.tsx"
const ExampleComponent = React.memo((props: any) => {
  const treeSpiderRef = React.useRef<TreeSpider | null>(null)

  React.useLayoutEffect(() => {
    treeSpiderRef.current = new TreeSpider({
      targetContainer: "#container-1",
      // ...
    })
  }, [])
  
  return (
    <div id="container-1"></div>
  )
})

export default ExampleComponent;
```
  
Then TreeSpider is going to be displayed in the browser, to access the methods and events you can use the `treeSpiderRef`, and other options also works the same way as it would in a non-react js application.  
  
The React JS library version of TreeSpider is coming soon.
