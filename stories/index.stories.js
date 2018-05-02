import React from 'react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'
import { Welcome } from '@storybook/react/demo'

import Button from '../src/components/Button'

storiesOf('nOS', module).add('Welcome', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>My label</Button>
  )
)
