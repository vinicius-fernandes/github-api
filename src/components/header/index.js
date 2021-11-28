import React,{ useState} from "react";

import { useGitHub } from "../../hooks/github-hooks";
import * as S from "./styled"
export const Header = () =>{
    const {getUser} = useGitHub();
    const[usernameForSearch,setUsernameForSearch]= useState();
    const submitGetUser = () =>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    }
    return (<header>
        <S.Wrapper>
            <input type="text" placeholder="Insira o username para pesquisa ..." onChange={(event)=>setUsernameForSearch(event.target.value)}/>
            <button onClick = {submitGetUser}>BUSCAR</button>
        </S.Wrapper>
        </header>);
}