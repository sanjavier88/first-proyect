import "./App.css";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Filters from "./components/filters";
import RepoList from "./components/repo-list";
import Search from "./components/search";
// import repoData from "./components/repo-data";
import { useState, useEffect } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";
import Modal from "./modal";

function App() {
  const params = useParams();
  let username = params.user;
  if (!username) {
    username = "leonidasesteban";
  }
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado este usuario");
        return;
      }
      setUser(data);
    });

    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado los repos de este usuario");
        return;
      }
      setRepos(data);
    });
  }, [username]);
  return (
    <Layout>
      <Modal />
      <Profile {...user} />
      <Filters />

      <RepoList repoList={repos} />
      <Search />
    </Layout>
  );
}

export default App;
