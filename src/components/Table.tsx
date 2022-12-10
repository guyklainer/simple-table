import { FC } from "react";
import styled from "styled-components";

interface TableProps {
    data: any
}

const Container = styled.div`

`;
const Table = ({data}: TableProps) => {

    const extractKeys = (data: any) => {
        return  data ? Object.keys(data) : null;
    };
    
    const keys = extractKeys(data);

   return <Container>
    <header>Header</header>
    <main>Main</main>
    <footer>Footer</footer>
 </Container> 
}

export default Table;