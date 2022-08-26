# React-Starting-to-End-2022-Web-Development-Journey
This is the whole react js repo.


01. npx create-react-app 01suman
02. npm start
03. exploring files : public/index.js-set bootstrap links(script & bootstrap)
                      src/app.js-( <> components/Navbar.js </>)
04. Bootstrap css navbar code into Navbar.js file
05. link app.js and navbar.js through import Navbar ... and write the <Navbar/> tag.
06. Then learn about props. import Proptypes...
07. Navbar.propTypes={
            title: PropTypes.string.isRequired,
            abouttext: PropTypes.string.isRequired
                     }

    Navbar.defaultProps={
             title: "set the title",
            abouttext: "about text here"
                         }
08. 