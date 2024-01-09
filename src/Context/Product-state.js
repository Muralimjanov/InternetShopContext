import { GET_CATEGORY, GET_ALLPRODUCTS, ADD_TOCARD, DELETE_TOCARD, SEARCH_PRODUCT, GET_CATEGORY_PRODUCT } from './Types'
import { useReducer } from 'react'
import { MyContext } from './My-context'
import { ProductReducer } from './Product-reducer'

export const ProductState = ({ children }) => {
    const initialState = {
        categories: [],
        products: [],
        cart: [],
        data: [],
        loading: false,
        error: null
    }
    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getCategoriesState = (data) => dispatch({ type: GET_CATEGORY, payload: data })

    const getAllProductsState = (data) => dispatch({ type: GET_ALLPRODUCTS, payload: data })

    const addToCard = (id) => dispatch({ type: ADD_TOCARD, id })

    const deleteToCard = (id) => dispatch({ type: DELETE_TOCARD, id })

    const searchClick = (text) => dispatch({ type: SEARCH_PRODUCT, text })

    const getCategoryProduct = (data) => dispatch({ type: GET_CATEGORY_PRODUCT, payload: data })

    return (
        <MyContext.Provider value={{
            categories: state.categories,
            products: state.products,
            cart: state.cart,
            data: state.data,
            getCategoriesState,
            getAllProductsState,
            addToCard,
            deleteToCard,
            searchClick,
            getCategoryProduct
        }}>
            {children}
        </MyContext.Provider>
    )
}

