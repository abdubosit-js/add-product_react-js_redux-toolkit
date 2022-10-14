import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchDescription } from '../store/actions'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Description = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector(store => store)

    useEffect(() => {
        dispatch(fetchDescription(id))
    }, [dispatch])

    return (
        <Wrapper>
            <div className='image_wrapper'>
                <img src={'http://142.93.246.144/' + product.image} alt="" />
            </div>

            <div className='title_wrapper'>
                <h1>{product.title}</h1>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <Link to='/'><ArrowBackIosIcon/> back</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    .image_wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .title_wrapper {
        width: 100%;
        padding: 30px;
        margin-top: 100px;
        h3 {
            margin-top: 20px;
            color: gray;
        }
        p {
            margin-top: 30px;
        }
        a {
            color: black;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
            text-decoration: none;
            border-radius: 4px;
            background-color: red;
        }
    }
`
