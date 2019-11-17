import CheeseTable from "../components/table";

import "normalize.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import Layout from "../components/MyLayout";

const CheesePage = () => {
  return (
    <Layout style={{ border: "none" }}>
      <h2 style={{ textAlign: "center" }}>Reload cheese records</h2>
      <CheeseTable></CheeseTable>
    </Layout>
  );
};

export default CheesePage;
