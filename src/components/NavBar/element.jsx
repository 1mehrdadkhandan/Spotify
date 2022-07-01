import styled from "styled-components";

export const Countiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    .search {
        display: flex;
        background-color: #fff;
        align-items: center;
        color: #000;
        height: 40px;
        width: 300px;
        font-size: 18px;
        border-radius: 50px;
        justify-content: center;
        .InputSearch{
            display: flex;
            justify-content: start;
            align-items: center;
            width: 80%;
        
        input{
            font-size: 14px;
            width: 100%;
            outline: 0;
            border: 0;
            vertical-align:middle ;

        }
    }
    }
`
