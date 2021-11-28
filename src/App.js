import React from "react";
import Layout from "./components/layout"
import { NoSearch } from "./components/no-search";
import Profile from "./components/profile"
import { Repositories } from "./components/repositories";
import { useGitHub } from "./hooks/github-hooks";


function App() {
  const {githubState}=useGitHub();
  return (
      <Layout>
        {githubState.hasUser?
              <>
              {githubState.loading? (<p>Loading...</p>):
              (<>
              <Profile/>
              <Repositories/>
              </>)}
      
              </>
              :
              <NoSearch/>
      }

      </Layout>

  );
}

export default App;
