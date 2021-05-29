import React from 'react'
import ProductChoice from './ProductChoice/ProductChoice'
import { Form, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import Consume from './Consume/Consume'
import classes from './OneDrug.module.css'
import { deletePrescribedProduct } from '../../../store/actions/productActions'

const OneDrug = (props) => {
    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(deletePrescribedProduct(props.thisDrug))
    }

    return (
        <div>
            <Form.Field>
                <label>Препарат</label>
                <ProductChoice products={props.products} />
            </Form.Field>

            <Form.Field>
                <label>Частота приема</label>
                <Consume />
            </Form.Field>

            <div className={classes.OneDrug__right}>
                <Button onClick={removeItem}>Удалить</Button>
            </div>
        </div>
    )
}

export default OneDrug