import { useEffect } from 'react';
import styled from "styled-components";
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useRecoilState } from 'recoil';
import { getData } from '../../services/api';
import { dataState, Entity, searchState } from '../../services/atoms';

const Table = () => {
    
    const [data, setData] = useRecoilState<Entity[]>(dataState);
    const [search, setSearch] = useRecoilState<string>(searchState);
    const inputChange = (e: any) => {
        setSearch(e?.target.value);
    };
  
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setData(data);
        };

        fetchData();
    }, [setData]);

    return <Container>
        <h1 className='mb-5 text-center'>Web3 Protocols</h1>
        {data.length === 0 ? 
            <div className="loading">Loading&#8230;</div>
        :
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input value={search} onChange={inputChange} type="text" className="form-control" placeholder="Starting typing..." />
            </div>
            <table className='table'>
                <Header />
                <Body />
                <Footer />
            </table>
        </>
        }
    </Container>;
}

const Container = styled.div`
    font-size: 14px;
    width: 1000px;
    margin: 20px auto;

    .loading {
        text-align: center;
        font-size: 20px;
    }

    table {
        table-layout: fixed;
    }
`;

export default Table;