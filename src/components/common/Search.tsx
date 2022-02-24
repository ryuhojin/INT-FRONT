import styled from "styled-components";
import { MdSearch } from 'react-icons/md';
import { darken } from "polished";

const SearchStyle = styled.div`
    display:flex;
    align-items: center;
    border-radius:10px;
    border: 1px solid #000;
    padding: 0.5rem 1rem;
    height: fit-content;
    :first-child{
        color:#000;
    }
    :hover{
        /* border-color: ${darken(0.5, '#e6e6e6')}; */
    }
    :first-child:hover{
        /* color:${darken(0.5, '#e6e6e6')}; */
    }
    input[type='text']{
        width:100%;
        height:40px;
        border:0;
        outline:none;
        font-size:1.125em;
        font-weight: 600;
        padding-left:0.5rem;
        align-self: baseline;
    }
`;
const Search = ({ placeholder, style, search, setSearch, onEnter }: { placeholder: string, style?: any, search: string, setSearch: any, onEnter?:any }) => {
    return <SearchStyle style={style}>
        <MdSearch size={30} /><input type="text" value={search} onChange={setSearch} placeholder={placeholder} onKeyUp={onEnter} />
    </SearchStyle>
}
export default Search;