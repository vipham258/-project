import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  backgroundColor: "#30404d"
};
const Layout = props => (
  <div className="bp3-dark" style={{ ...layoutStyle, ...props.style }}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
