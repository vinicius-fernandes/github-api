import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";
export const useGitHub = ()=>{
const {githubState,getUser,getUserRepos,getUserStarred}=useContext(GithubContext);
return {githubState,getUser,getUserRepos,getUserStarred};
}