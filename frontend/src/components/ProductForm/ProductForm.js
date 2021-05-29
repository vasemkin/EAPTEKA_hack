import React from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import OneDrug from './OneDrug/OneDrug'
import classes from './ProductForm.module.css'
import { useDispatch } from 'react-redux'
import makeid from '../../misc/makeid'
import { addPrescribedProduct } from '../../store/actions/productActions'

const ProductForm = (props) => {
  const dispatch = useDispatch()

  const addPrescriptionItem = () => {
    const id = makeid(4)
    dispatch(addPrescribedProduct({ key : id }))
  }

  return(
    <Form>
      <div className={classes.ProductForm__add}>
        <Header as='h4'>Добавить препарат</Header>
        <Button onClick={addPrescriptionItem}>Добавить</Button>
      </div>
      {
        props.products.prescribedProducts.map((product) => {
          return (
            <OneDrug products={props.products} key={product.key} thisDrug={product.key}/>
          )
        })
      }
      <Button type='submit'>Выписать</Button>
    </Form>
  )
}

export default ProductForm
