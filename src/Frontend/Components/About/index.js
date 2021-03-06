import React from 'react'
import ttn from '../Assets/images/ttn.png'
import '../Assets/Styling/aboutStyle.css'
const App = () => {
    return(
      <div id="fullscreen_bg" className="fullscreen_bg">
        <form className="form-signin">
          <div className="container">
            <div className="row">
              <div id="signupbox" style={{"marginTop":"50px"}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel-body">
                  <img src={ttn}/>
                    <p>
    TO THE NEW is a premium digital technology company that provides end-to-end product
  development services. TO THE NEW leverages the power of experience design, cutting-edge engineering and
  cloud to build disruptive web and mobile products and enable digital transformation for
    businesses.TO THE NEW practices Agile methodologies to develop innovative products with a faster time
  to market. With a team of 750+ passionate technologists, TO THE NEW constantly challenges
  the status quo to empower Fortune 500 companies as well as startups across the globe.
                    </p>
                  <hr/>
                <strong>Designed by:Anchal Jain</strong>
              </div>
            </div>
          </div>
         </div>
      </form>
    </div>
    )
};

export default App;