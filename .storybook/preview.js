import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
// add-info table style not working for now, I don't know the reason, so we have to manaul import it

library.add(fas)
const wrapperStyle = {
  padding: '20px 40px',
  width: '500px'
}

const storyWrapper = (stroyFn) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })
// const loaderFn = () => {
//   const allExports = [require('../src/welcome.stories.tsx')];
//   const req = require.context('../src/components', true, /\.stories\.tsx$/);
//   req.keys().forEach(fname => allExports.push(req(fname)));
//   return allExports;
// };

const loaderFn = () => {
  return [
    require('../src/welcome.stories.tsx'),
    require('../src/components/Button/button.stories.tsx'),
    require('../src/components/Alert/alert.stories.tsx'),
    require('../src/components/Menu/menu.stories.tsx'),
    require('../src/components/Tabs/tabs.stories.tsx'),
    require('../src/components/Icon/icon.stories.tsx'),
    require('../src/components/Input/input.stories.tsx'),
    require('../src/components/AutoComplete/autoComplete.stories.tsx'),
    require('../src/components/Select/select.stories.tsx'),
    require('../src/components/Upload/upload.stories.tsx'),
  ]
}


// automatically import all files ending in *.stories.js
configure(loaderFn, module);

// import { configure } from '@storybook/react'
// import "../src/styles/index.scss"

// import { configure, addDecorator } from '@storybook/react'
// // import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import "../src/styles/index.scss"
// library.add(fas)
// configure(require.context('../src', true, /\.stories\.tsx$/), module);
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

// const styles: React.CSSProperties = {
//     textAlign: 'center'
// }

// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
// addDecorator(CenterDecorator);