/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useCheeseData } from "../hooks/useCheeseData";

const linkStyle = {
  marginRight: 15,
  color: "GreenYellow"
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
      <div>
        {" "}
        <h1>Project by Vi Pham 040886894</h1>
      </div>
    </div>
  );
};

export default Header;
