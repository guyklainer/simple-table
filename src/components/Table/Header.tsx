import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userPropsState } from "../../services/Users";

const Header = () => {
    const keys = useRecoilValue(userPropsState);
    
    return <Container>
        {keys.map(key => <div key={key.value} className="th">{key.capitalize}</div>)}    
    </Container>;
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default Header;