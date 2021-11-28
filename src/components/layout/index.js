import React from "react";
import { useGitHub } from "../../hooks/github-hooks";
import { Header } from "../header";
import * as S from "./styled"
function Layout({children}){
    return (
        <S.WrapperLayout>
<Header/>

{children}
        
        </S.WrapperLayout>
    );
}

export default Layout;