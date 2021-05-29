import React, { useEffect } from 'react'
import { Grid, Container, Segment, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import ProductForm from './components/ProductForm/ProductForm'
import { getProducts } from './store/actions/productActions'

function App() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (

      <Container>

        <Segment basic>

          { products.productsFetching 
          
          ? <p>fetching</p>

          : <div>

            {
              <ProductForm products={products}/>
            }

            </div>    
          }

        </Segment>


      </Container>

  );
}

export default App;