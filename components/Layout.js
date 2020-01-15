
const Layout = props => (
  <div className="wrapper">
    {props.children}
    {/* if you remove the above line, the Layout cannot render the content we put inside the element */}
    <style jsx>{`
        div {
          border: 2px solid black;
          width: 70%;
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background: ${props.color};
        }
        `}</style>
  </div>
)

export default Layout;