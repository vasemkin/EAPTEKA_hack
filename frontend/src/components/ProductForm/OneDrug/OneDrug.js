import React, { useState } from 'react'
import { Form, Button, Dropdown, Input } from 'semantic-ui-react'
import makeid from '../../../misc/makeid'
import { useDispatch } from 'react-redux'
import classes from './OneDrug.module.css'
import { deletePrescribedProduct, updatePrescribedProduct } from '../../../store/actions/productActions'

const freqs = [
    { key : `${makeid(4)}`, value : 'ONCE_DAY', text : 'Один раз в день' },
    { key : `${makeid(4)}`, value : 'TWICE_DAY', text : 'Два раза в день' },
    { key : `${makeid(4)}`, value : 'ONCE_WEEK', text : 'Один раз в неделю' },
    { key : `${makeid(4)}`, value : 'TWICE_WEEK', text : 'Два раза в неделю' }
]

const OneDrug = (props) => {
    const dispatch = useDispatch()

    const [dropdownValue, setdropdownValue] = useState({
        id : 0,
        name : '',
        frequency : '',
        consumeTime : '',
        doctor : '',
        issueDate : '',
        dueDate : ''
    })

    function changeNameID(e, {value}) {
        setdropdownValue({
            ...dropdownValue,
            id : value,
            name : e.target.textContent
        })
        dispatch(updatePrescribedProduct(props.thisDrug, dropdownValue))
    }

    function changeFrequency(e, {value}) {
        setdropdownValue({
            ...dropdownValue,
            frequency : value
        })
        dispatch(updatePrescribedProduct(props.thisDrug, dropdownValue))
    }

    const removeItem = () => {
        dispatch(deletePrescribedProduct(props.thisDrug))
    }

    return (
        <div>
            <Form.Field>
                <label>Препарат</label>
                <Dropdown
                    placeholder='Препарат'
                    fluid
                    search
                    selection
                    onChange={(e, { value }) => changeNameID(e, { value })}
                    options={props.products.products}
                />
            </Form.Field>

            <Form.Field>
                <label>Частота приема</label>
                <Dropdown
                    placeholder='Частота приема'
                    fluid
                    selection
                    onChange={(e, { value }) => changeFrequency(e, { value })}
                    options={freqs}
                />
            </Form.Field>
            
            <Form.Field>
                <label>Время приема</label>
                <Input 
                    placeholder='[9, 16]' 
                    onChange={(e) => {
                        setdropdownValue({
                            ...dropdownValue,
                            consumeTime : e.target.value
                        })
                        dispatch(updatePrescribedProduct(props.thisDrug, dropdownValue))
                    }}
                />
            </Form.Field>

            <Form.Field>
                <label>Лечащий врач</label>
                <Input 
                    placeholder='Татьяна Геннадьевна Тарковская' 
                    onChange={(e) => {
                        setdropdownValue({
                            ...dropdownValue,
                            doctor : e.target.value
                        })
                        dispatch(updatePrescribedProduct(props.thisDrug, dropdownValue))
                    }}
                />
            </Form.Field>

            <Form.Field>
                <label>Дата выдачи</label>
                <Input 
                    placeholder='29.05.2021' 
                    onChange={(e) => {
                        setdropdownValue({
                            ...dropdownValue,
                            issueDate : e.target.value
                        })
                        dispatch(updatePrescribedProduct(props.thisDrug, dropdownValue))
                    }}
                />
            </Form.Field>

            <Form.Field>
                <label>Дата окончания</label>
                <Input 
                    placeholder='29.07.2021'
                    onChange={(e) => {
                        setdropdownValue({
                            ...dropdownValue,
                            dueDate: e.target.value
                        })
                        dispatch(updatePrescribedProduct(props.thisDrug, dropdownValue))
                    }} 
                />
            </Form.Field>

            <div className={classes.OneDrug__right}>
                <Button onClick={removeItem}>Удалить</Button>
            </div>
        </div>
    )
}

export default OneDrug