import React from "react";
import { useGitHub } from "../../hooks/github-hooks";
import * as S from './styled'
const Profile = () =>{
    const {githubState} = useGitHub();
   return( 
  <S.Wrapper>
    <S.WrapperImage src ={githubState.user.avatar_url} alt="Picture of the user"/>
  <S.WrapperInfos>
  <h1>{githubState.user.name}</h1>
  <S.Wrapper>
      <S.WrapperUserName>
  <h3>Username:</h3>
  <a href={githubState.user.html_url} target = "_blank" rel="noreferrer">{githubState.user.login}</a>
  </S.WrapperUserName>

  </S.Wrapper>
  <S.WrapperUserName>
  <h3>Location:</h3>
  <span>{githubState.user.location} </span>
  </S.WrapperUserName>
  <S.WrapperUserName>
  <h3>Company:</h3>
  <span>{githubState.user.company} </span>
  </S.WrapperUserName>
  <S.Wrapper>
      <S.WrapperStatusCount>
    <div>
    <h4>Followers</h4>
    <span>{githubState.user.followers}</span>
    </div>
    </S.WrapperStatusCount>
    <S.WrapperStatusCount>
        <div>
    <h4>Following</h4>
    <span>{githubState.user.following}</span>
    </div>
    </S.WrapperStatusCount>
    <S.WrapperStatusCount>
        <div>
    <h4>Gists</h4>
    <span>{githubState.user.public_gists}</span>
    </div>
    </S.WrapperStatusCount>
    <S.WrapperStatusCount>
        <div>
    <h4>Repos</h4>
    <span>{githubState.user.public_repos}</span>
    </div>
    </S.WrapperStatusCount>
    </S.Wrapper>
    </S.WrapperInfos>
    </S.Wrapper>
  )

}
export default Profile;