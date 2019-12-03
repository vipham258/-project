/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *  @fileOverview This is a header component, using in other pages in the whole project
 * Content: home, create, reload, save
 *  @author       Vi Thi Phuong Pham
 */

import Link from "next/link";
import { useCheeseData } from "../hooks/useCheeseData";
//CSS style for the header
const linkStyle = {
  marginRight: 15,
  color: "GreenYellow"
};

const Header = () => {
  //get the cheeseData object from useCheeseData file
  const { loadCheeseData, saveCheeseData } = useCheeseData();
  //function to handleReload
  const handleClickReloadCheeseData = () => {
    loadCheeseData();
  };
  //function to handle Save cheeseData
  const handleClickSaveCheeseData = () => {
    saveCheeseData();
  };
  return (
    <div>
      {/*
        link to home page
      */}
      <div>
        <h1>Project by Vi Pham 040886894</h1>
      </div>

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

      <Link href="/search">
        <a style={linkStyle}>Search</a>
      </Link>
    </div>
  );
};

export default Header;
