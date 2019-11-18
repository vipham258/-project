/**
 *  @fileOverview This is a custom layout component has header inside
 *  @author       Vi Thi Phuong Pham
 */
import Header from "./Header";
//css style for layout
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  backgroundColor: "#30404d"
};
//create custom layout
const Layout = props => (
  <div className="bp3-dark" style={{ ...layoutStyle, ...props.style }}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
