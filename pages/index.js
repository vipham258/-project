// This is the Link API
import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import "normalize.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

const Index = props => (
  <Layout>
    <h1>Project by Vi Pham 040886894</h1>
    <h2>OPTIONS</h2>
    <ol>
      {/* {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))} */}
      <li>
        <Link href="cheese">
          <a>Reload Cheese Data</a>
        </Link>
      </li>
      <li>Display all cheese record</li>
      <li>Create a new record</li>
      <li>Update a record</li>
      <li>Delete a record</li>
      <li>Sorting cheese records</li>
    </ol>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
