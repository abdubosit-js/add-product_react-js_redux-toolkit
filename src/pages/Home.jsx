import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../store/actions';
import ProductBox from '../components/ProductBox';
import { Header } from '../components/Header';

export const Home = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(store => store)
    const [searchValue, setSearchValue] = useState('')

    const filtredProducts = () => {
        const result = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
        return result
    }
 
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <Wrapper>
            <Header searchValue={(e) => setSearchValue(e)} />
            <Grid>
                {filtredProducts().map((product, index) => <ProductBox key={index} {...product} />)}
            </Grid>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-top: 0.1px solid #3874CB;

`
const Grid = styled.div`
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    padding: 30px 10px;
`
