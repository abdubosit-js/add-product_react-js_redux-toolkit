import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { saveProduct } from '../store/actions'
import { Header } from './Header'

export const AddProducts = () => {
    const titleRef = useRef()
    const priceRef = useRef()
    const imageRef = useRef()
    const descRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveProductHandler = () => {
        const formData = new FormData()
            formData.append("title", titleRef.current.value)
            formData.append("price", priceRef.current.value)
            formData.append("image", imageRef.current.files[0])
            formData.append("description", descRef.current.value)
            
        dispatch(saveProduct(formData)).then(() => navigate("/"))        
    }

    return (
        <Wrapper>
            <Header title='Home'/>
            <div className="add-product_wrapper">
                <h1>Add Product</h1>
                <input type="text" ref={titleRef} placeholder='product name...' />
                <input type="text" ref={priceRef} placeholder='product price...' />
                <input type="file" name="" id="" ref={imageRef} className='file' />
                <textarea name="" id="" cols="4" rows="10" ref={descRef} placeholder="description..."></textarea>
                <button onClick={saveProductHandler}>add product</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    border: 0.1px solid transparent; 
    .add-product_wrapper {
        margin: 130px auto;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        h1{
            margin:  auto;
        }
        textarea {
            padding: 10px;
            resize: none;
            border-radius: 4px;
            border: 1px solid #c1c1c1;
        }
        .file {
            padding: 12px 10px;
            border: 1px solid #c1c1c1;
            border-radius: 3px;
        }
        button {
            padding: 10px;
            border: none;
            background-color: #3131c4;
            color: white;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
            font-weight: 700;
            :active {
                background-color: blue;
            }
        }
    }
`