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
      <div>
        {/*
        link to home page
      */}
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        {/*
        reload the data from cvs file
      */}
        <a onClick={handleClickReloadCheeseData} style={linkStyle}>
          Reload
        </a>
        {/*
        Save the data to the output.cvs file
      */}
        <a onClick={handleClickSaveCheeseData} style={linkStyle}>
          Save
        </a>
        {/*
        Open the create cheese form
      */}
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
