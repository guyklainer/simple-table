import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { dataStructuredState } from "../../services/selectors";
import Row from "./Row";

const Body = () => {
    const data = useRecoilValue(dataStructuredState);
    
    return <Container>
        {data.map(entity => <Row key={entity.name} entity={entity} />)}
    </Container>;
};

const Container = styled.tbody`
    
`;

export default Body;