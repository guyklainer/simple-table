import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { structureState } from "../../services/Structure";
import { User, userKeysState } from "../../services/Users";

const Header = () => {
    const keys = useRecoilValue(userKeysState);
    const [structure, setStructure] = useRecoilState(structureState);
    
    const changeOrder = (key: string) => {
        const newState = {...structure};
        if (structure.orderBy === key) {
            newState.orderDirection = structure.orderDirection === 'DESC' ? 'ASC' : 'DESC';
        } else {
            newState.orderDirection = 'ASC';
            newState.orderBy = key as keyof User;
        }

        setStructure(newState);
    };

    return <Container>
        <tr>
            {keys.map(key => 
                <th key={key.value} onClick={() => changeOrder(key.value)}>{key.capitalize}</th>
            )}    
        </tr>
    </Container>;
};

const Container = styled.thead`
    th {
        cursor: pointer;
    }
`;

export default Header;