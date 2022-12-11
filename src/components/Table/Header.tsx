import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { structureState, Entity } from "../../services/atoms";
import { dataKeysState } from "../../services/selectors";
import { Caret } from "./Caret";

const Header = () => {
    const keys = useRecoilValue(dataKeysState);
    const [structure, setStructure] = useRecoilState(structureState);
    
    const changeOrder = (key: string) => {
        const newState = {...structure};
        if (structure.orderBy === key) {
            newState.orderDirection = structure.orderDirection === 'DESC' ? 'ASC' : 'DESC';
        } else {
            newState.orderDirection = 'ASC';
            newState.orderBy = key as keyof Entity;
        }

        setStructure(newState);
    };

    return <Container>
        <tr>
            <td></td>
            {keys.filter(key => key.value !== 'logo').map(key => 
                <th key={key.value} onClick={() => changeOrder(key.value)}>
                    {key.capitalize}&nbsp;
                    {structure.orderBy === key.value && <Caret direction={structure.orderDirection}/>}
                    
                </th>
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