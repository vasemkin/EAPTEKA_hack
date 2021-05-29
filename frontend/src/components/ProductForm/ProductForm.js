import React from 'react'
import { Button, Header, Form } from 'semantic-ui-react'
import OneDrug from './OneDrug/OneDrug'
import classes from './ProductForm.module.css'
import { useDispatch } from 'react-redux'
import makeid from '../../misc/makeid'
import { addPrescribedProduct, postPrescription } from '../../store/actions/productActions'

const ProductForm = (props) => {
  const dispatch = useDispatch()

  const addPrescriptionItem = () => {
    const id = makeid(4)
    dispatch(addPrescribedProduct({ key : id, data : {} }))
  }

  const submitPrescription = () => {
    dispatch(postPrescription(props.products.prescribedProducts))
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

      <Button onClick={submitPrescription}>Выписать</Button>

    </Form>
  )
}

export default ProductForm
