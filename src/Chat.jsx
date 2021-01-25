import React from "react";
import {Helmet} from "react-helmet";
import "./App.css"

class Chat extends React.Component {
  render () {
    return (
        <div id="chat">
            <Helmet>
            <script className="button"type="text/javascript" async defer src="//js.hs-scripts.com/9197058.js"></script>
            </Helmet>
        </div>
    );
  }
};

export default Chat
// //   <!-- Start of HubSpot Embed Code -->
// // <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9197058.js"></script>
// // <!-- End of HubSpot Embed Code -->
