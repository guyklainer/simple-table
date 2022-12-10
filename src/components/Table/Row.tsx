import { useRecoilValue } from "recoil";
import { User, userKeysState } from "../../services/Users";

interface RowProps {
    user: User;
}

const Row = ({user}: RowProps) => {
    const keys = useRecoilValue(userKeysState).map(key => key.value) as (keyof User)[];
    
    return <tr>
        {keys.map(key => <td key={key}>{user[key]}</td>)}
    </tr>;
}

export default Row;