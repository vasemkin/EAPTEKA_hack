import React, { useEffect } from 'react'
import { Grid, div, Segment, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import ProductForm from './components/ProductForm/ProductForm'
import { getProducts } from './store/actions/productActions'
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import classes from './App.module.css';

function App() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (

      <div className={classes.App__seg}>

        <div className={classes.App__el}>

          { products.productsFetching 
          
          ? <p>fetching</p>

          : <div>

            {
              <ProductForm products={products}/>
            }

            </div>    
          }

        </div>

        <div className={classes.App__el}>
          {
            products.QRValue 
            ? <QRCode value={products.QRValue}/>
            : null 
          }
        </div>


      </div>

  );
}

export default App;