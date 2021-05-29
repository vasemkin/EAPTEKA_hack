import React, { useEffect } from 'react'
import { Grid, Container, Segment, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/actions/productActions'

function App() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const productsFetching = useSelector(state => state.products.productsFetching)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (

      <Container>

        <Segment basic>

          { productsFetching 
          
          ? <p>fetching</p>

          : <div>

            {
              products.map((product) => { 
                return (<p>{JSON.stringify(product)}</p>)
              })
            }

            </div>    
          }

        </Segment>


      </Container>

  );
}

export default App;