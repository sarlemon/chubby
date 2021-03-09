
import { configure, addDecorator } from '@storybook/react'
// import React from 'react'
import "../src/styles/index.scss"
configure(require.context('../src', true, /\.stories\.tsx$/), module);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// const styles: React.CSSProperties = {
//     textAlign: 'center'
// }

// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
// addDecorator(CenterDecorator);