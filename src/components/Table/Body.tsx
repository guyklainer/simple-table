import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { usersStructuredState } from "../../services/Structure";
import Row from "./Row";

const Body = () => {
    const users = useRecoilValue(usersStructuredState);
    
    return <Container>
        {users.map(user => <Row key={user.id} user={user} />)}
    </Container>;
};

const Container = styled.tbody`
    
`;

export default Body;