import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

const defaultButton = () => (
  <Button onClick={action('click')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
)

storiesOf('Button Component', module)
  .add('默认 Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)