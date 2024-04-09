import React from 'react';
import styled from 'styled-components';

const CustomButton = ({text,color,bg,pd}) => {

    return (
        <Button color={color} bg={bg} pd={pd}>{text}</Button>
    )
}

export default CustomButton;

const Button = styled.button`
    background: ${(props) => props.bg ? 'radial-gradient(100% 100% at 100% 0,#5adaff 0,#5468ff 100%)' : 'transparent!important'};
    color: ${(props) => props.color ? 'white' : 'blue'};
    width: -webkit-fill-available;
    border: 1px solid blue;
    outline: none;
    height: 2rem;
    font-size: 1rem;
    border-radius: 7px;
    margin: 10px 0 0 0;
    cursor: pointer;
    padding: ${(props) => props.pd ? '0 5rem' : ''};
`