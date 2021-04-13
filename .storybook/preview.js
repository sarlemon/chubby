import { configure } from '@storybook/react'
import "../src/styles/index.scss"

import { configure, addDecorator } from '@storybook/react'
// import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
library.add(fas)
configure(require.context('../src', true, /\.stories\.tsx$/), module);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// const styles: React.CSSProperties = {
//     textAlign: 'center'
// }

// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
// addDecorator(CenterDecorator);