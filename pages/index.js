/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "../components/MyLayout";
import Link from "next/link";
import { useCheeseData } from "../hooks/useCheeseData";

const Index = props => {
  const { loadCheeseData, saveCheeseData } = useCheeseData();

  const handleClickReloadCheeseData = () => {
    loadCheeseData();
  };

  const handleClickSaveCheeseData = () => {
    saveCheeseData();
  };

  return (
    <Layout>
      <h1>Project by Vi Pham 040886894</h1>
      <h2>OPTIONS</h2>
      <ol>
        <li>
          <a onClick={handleClickReloadCheeseData}>Reload Cheese Data</a>
        </li>
        <li>
          <a onClick={handleClickSaveCheeseData}>Save Cheese Data</a>
        </li>
        <li>
          <Link href="cheese">
            <a>Display all cheese record</a>
          </Link>
        </li>
        <li>Create a new record</li>
        <li>Update a record</li>
        <li>Delete a record</li>
        <li>Sorting cheese records</li>
      </ol>
    </Layout>
  );
};

export default Index;
