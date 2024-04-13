import "./App.css";
import qrCode from "../images/image-qr-code.png";

const App = () => {
  return (
    <div className="card">
      <img src={qrCode} alt="QR Code" />
      <div className="inner">
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR Code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default App;
