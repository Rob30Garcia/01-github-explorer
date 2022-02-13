import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
    .then(respopnse => respopnse.json())
    .then(data => setRepositories(data));
  }, []);

  return (
    <section>
      <h1>Lista de repositório</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem repository={repository} />
        ))}
      </ul>
    </section>
  );
}
