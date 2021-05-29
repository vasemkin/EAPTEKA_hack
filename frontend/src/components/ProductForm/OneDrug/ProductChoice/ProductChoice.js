import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const ProductChoice = (props) => (
  <Dropdown
    placeholder='Препарат'
    fluid
    search
    selection
    options={props.products.products}
  />
)

export default ProductChoice
