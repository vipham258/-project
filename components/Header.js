/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useCheeseData } from "../hooks/useCheeseData";
import { Button, Card, Elevation } from "@blueprintjs/core";
import CheeseCard from "../components/CheeseCard";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  const { loadCheeseData, saveCheeseData } = useCheeseData();

  const handleClickReloadCheeseData = () => {
    loadCheeseData();
  };
  const handleClickSaveCheeseData = () => {
    saveCheeseData();
  };
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link>
        <a onClick={handleClickReloadCheeseData} style={linkStyle}>
          Reload
        </a>
      </Link>
      <Link>
        <a onClick={handleClickSaveCheeseData} style={linkStyle}>
          Save
        </a>
      </Link>
      <Link>
        <a style={linkStyle}>Create</a>
      </Link>
    </div>
  );
};

export default Header;
