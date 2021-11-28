import React from "react";
import App from "./App";
import { ResetCss } from "./global/resetCSS";
import { GithubProvider } from "./providers/github-provider";
export const Providers = () =>{
    return(
        <main>
        <GithubProvider>
            <ResetCss/>
            <App/>

            </GithubProvider>
        </main>
    )
}