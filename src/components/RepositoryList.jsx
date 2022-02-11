import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Nome do repositório",
  description: "Descrição do repositório",
  link: "link"
}

export function RepositoryList() {
  return (
    <section>
      <h1>Lista de repositório</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
