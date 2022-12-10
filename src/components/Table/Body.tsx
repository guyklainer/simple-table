import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../services/Users";
import { userPropsState, usersState } from "../../services/Users";

interface RowProps {
    user: User;
}

const Row = ({user}: RowProps) => {
    const keys = useRecoilValue(userPropsState).map(key => key.value) as (keyof User)[];
    return <div className="row">
        {keys.map(key => <div key={key}>{user[key]}</div>)}
    </div>;
}

const Body = () => {
    const users = useRecoilValue(usersState);
    
    return <Container>
        {users.map(user => <Row key={user.id} user={user} />)}    
    </Container>;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 15px;

    .row {
        display: flex;
        justify-content: space-between;
    }
`;

export default Body;