import "./App.css";
import Iframe from "react-iframe";
//import IframeResizer from 'iframe-resizer-react'

function App() {
  return (
    <div className="App">
      <Iframe
        url="https://app.powerbi.com/reportEmbed?reportId=6d439269-dc95-4814-babc-57c0fef82e18&autoAuth=true&ctid=513294a0-3e20-41b2-a970-6d30bf1546fa"
        width="85%"
        height="720px"
        scrolling="no"
        frameBorder="0"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default App;