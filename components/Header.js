/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useCheeseData } from "../hooks/useCheeseData";

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

      <a onClick={handleClickReloadCheeseData} style={linkStyle}>
        Reload
      </a>

      <a onClick={handleClickSaveCheeseData} style={linkStyle}>
        Save
      </a>

      <Link href="/create">
        <a style={linkStyle}>Create</a>
      </Link>
    </div>
  );
};

export default Header;
