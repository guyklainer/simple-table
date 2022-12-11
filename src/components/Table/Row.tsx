import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Entity } from "../../services/atoms";
import { dataKeysState } from "../../services/selectors";

interface RowProps {
    entity: Entity;
}

const Row = ({entity}: RowProps) => {
    const keys = useRecoilValue(dataKeysState)
        .map(key => key.value)
        .filter(key => key !== 'logo') as (keyof Entity)[];
    
    return <Container>
        <td><img src={entity.logo} /></td>
        {keys.map(key => <td key={key}>{entity[key]}</td>)}
    </Container>;
}

const Container = styled.tr`
    img {
        width: 30px;
        height: 30px;
    }
`;

export default Row;