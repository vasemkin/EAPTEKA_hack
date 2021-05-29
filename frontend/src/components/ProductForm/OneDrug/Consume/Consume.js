import React from 'react'
import makeid from '../../../../misc/makeid'
import { Dropdown } from 'semantic-ui-react'

const freqs = [
    { key : `${makeid(4)}`, value : 'ONCE_DAY', text : 'Один раз в день' },
    { key : `${makeid(4)}`, value : 'TWICE_DAY', text : 'Два раза в день' },
    { key : `${makeid(4)}`, value : 'ONCE_WEEK', text : 'Один раз в неделю' },
    { key : `${makeid(4)}`, value : 'TWICE_WEEK', text : 'Два раза в неделю' }
]

const ProductChoice = () => (
  <Dropdown
    placeholder='Частота приема'
    fluid
    selection
    options={freqs}
  />
)

export default ProductChoice
