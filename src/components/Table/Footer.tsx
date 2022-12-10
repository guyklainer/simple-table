import { useRecoilState } from "recoil";
import styled from "styled-components";
import { structureState } from "../../services/Structure";
import { usersState } from "../../services/Users";
import classnames from "classnames";

const Footer = () => {
    const [structure, setStructure] = useRecoilState(structureState);
    const [users] = useRecoilState(usersState);
    const pageLinks = Math.ceil(users.length / structure.pageSize);

    const limitChange = (e: any) => {
        setStructure({...structure, pageSize: parseInt(e?.target?.value), currentPage: 0})
    }

    const pageChange = (newPage: number) => {
        if(newPage >= 0 && newPage < pageLinks ){
            setStructure({...structure, currentPage: newPage})
        }
    }
    
    return <Container>
        <ul className="pagination">
            <li onClick={() => pageChange(structure.currentPage-1)} 
                className="page-item">
                    <a className="page-link">Previous</a>
            </li>
            
            {Array(pageLinks).fill(null).map((_, i) => 
                <li onClick={() => pageChange(i)} className="page-item">
                    <a className={classnames({'active': structure.currentPage === i}, "page-link")}>{i+1}</a>
                </li>
            )}

            <li onClick={() => pageChange(structure.currentPage+1)} 
                className="page-item">
                    <a className="page-link">Next</a>
            </li>
        </ul>

        <select onChange={limitChange} className="form-select">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
        </select>
  </Container>;
};

const Container = styled.tfoot`
    display: flex;
    padding: 15px 0;

    a {
        cursor: pointer;
    }

    .pagination {
        margin: 0 10px 0 0;
    }

    .page-item {
        padding: 0;
    }

    .form-select {
        width: 100px;
    }
`;

export default Footer;