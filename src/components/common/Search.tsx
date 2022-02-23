import styled from "styled-components";
import { MdSearch } from 'react-icons/md';
import { lighten } from "polished";

const SearchStyle = styled.div`
    width:30%;
    height:40px;
    display:flex;
    align-items: center;
    border: 1px solid #000;
    border-radius:25px;
    padding: 0.5rem 1rem;

    :hover{
        border-color:${lighten(0.5, '#000')};
    }
    :first-child:hover{
        color:${lighten(0.5, '#000')};
    }
    input[type='text']{
        width:100%;
        height:100%;
        border:0;
        outline:none;
        font-size:1.125em;
        font-weight: 600;
        padding-left:0.5rem;
    }
    @media only screen and (max-width: 550px) {
        width:100%;
        margin:0 1.5rem;
    }
`;
const Search = ({ placeholder }: { placeholder: string }) => {
    return <SearchStyle>
        <MdSearch size={30} /><input type="text" placeholder={placeholder} />
    </SearchStyle>
}
export default Search;