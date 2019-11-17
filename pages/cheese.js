import CheeseTable from "../components/table";

import Layout from "../components/MyLayout";
import { useCheeseData } from "../hooks/useCheeseData";

const CheesePage = () => {
  const { cheeseData } = useCheeseData();

  return (
    <Layout style={{ border: "none" }}>
      <h2 style={{ textAlign: "center" }}>Display cheese records</h2>
      <CheeseTable cheeseData={cheeseData}></CheeseTable>
    </Layout>
  );
};

export default CheesePage;
