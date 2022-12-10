import { useEffect } from 'react';
import { getUsers, usersState } from '../../services/Users';
import { User } from '../../services/Users';
import styled from "styled-components";
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useRecoilState } from 'recoil';

const Table = () => {
    
    const [users, setUsers] = useRecoilState<User[]>(usersState);
  
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setUsers(data);
        };

        fetchData();
    }, [setUsers]);

    if(users.length === 0){
        return <div>Empty</div>;
    };

    return <Container className='table'>
        <Header />
        <Body />
        <Footer />
    </Container>;
}

const Container = styled.table`
    font-size: 14px;
    width: 800px;
    margin: 20px auto;
`;

export default Table;