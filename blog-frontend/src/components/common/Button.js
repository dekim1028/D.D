import React from 'react';
import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';

const ButtonStyle = css`
    background-color:#045FB4;
    border:none;
    color:white;
    border-radius: 4px;
    font-weight: bold;
    padding: 8px 18px;

    &:hover{
        background-color: #0174DF;
    }
`;

const ButtonBlock = styled.button`
    ${ButtonStyle}

    ${props=>
        props.width&&
        css`
            width:${props.width};
        `
    }

    ${props=>
        props.height&&
        css`
            height:${props.height};
        `
    }
`;

const LinkBlock = styled(Link)`
    ${ButtonStyle}

    ${props=>
        props.width&&
        css`
            width:${props.width};
        `
    }

    ${props=>
        props.height&&
        css`
            height:${props.height};
        `
    }
`;

const Button = props => {
    return (
        props.to?(
            <LinkBlock {...props}/>
        ):(
            <ButtonBlock {...props}/>
        )
        
    );
};

export default Button;