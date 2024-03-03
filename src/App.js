import "./App.css";
import headerPic from "./images/heaser_idan.jpeg";
import pic1 from "./images/idan1.png";
import pic2 from "./images/idan2.png";
import pic3 from "./images/idan3.png";
import spinner from "./images/Spinner.gif";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const [isLoading, setLoading] = useState(false);

  const sendEmail = async () => {
    if (state.name === "" || state.tel === "" || state.email === "") {
      alert("נא למלא פרטים");
      return;
    }
    setLoading(true);
    const serviceId = "service_2s8q4a3";
    const templateId = "template_ccrjkwr";
    await emailjs.send(serviceId, templateId, state, "ceQHf9QfscG5jKtzt");
    setLoading(false);
    setState({ name: "", email: "", tel: "" });
    alert("אימייל נשלח בהצלחה");
  };
  return (
    <div className="container">
      <div className="container2">
        <div className="headerPic">
          <img src={headerPic} width="100%" />
        </div>
        <div className="txtHeader">
          <h2 className="txtHeader2">הניהול שלנו, השקט הנפשי שלך...</h2>
        </div>
        <div className="line"></div>
        <h3 className="secondHeader">
          הטיפול והשירות אישי וזמין 24 שעות ביממה.
          <br />
          GROSS מעניקה אמנת שירות חתומה לכל לקוח.
        </h3>
        <div className="superGrid">
          <div className="contentGrid">
            <div id="one" className="elementContainer">
              <div className="imgCont">
                <img src={pic3} width="100%" />
              </div>
              <h4 className="contentHeader">ניהול נכסים</h4>
              <p className="content">
                ניהול נכסים, ניהול דירות, השכרת דירות קנייה ומכירה של נכסים,
                משרדים,דירות בליווי עורך דין צמוד ובשקיפות מלאה
              </p>
            </div>

            <div id="two" className="elementContainer">
              <div className="imgCont">
                <img src={pic2} width="100%" />
              </div>
              <h4 className="contentHeader">אחזקת בניינים</h4>

              <p className="content">
                ניקיון בהקפדה יתרה, גינון אסטתי ועשיר, תיקונים, חשמל, אינסטלציה
                ועוד שירותים שישאירו את סביבת המגורים נעימה למחייה ולשכנות טובה
              </p>
            </div>

            <div id="three" className="elementContainer">
              <div className="imgCont">
                <img src={pic1} width="100%" />
              </div>
              <h4 className="contentHeader">ניהול ועד בית</h4>

              <p className="content">
                ניהול בתים משותפים כוועד בית:
                <br />
                גבייה, קיום אסיפות דיירים תקופתיות, עידכונים שוטפים במייל
                ובסלולאר, ניהול מו״מ עם גורמי חוץ.
              </p>
            </div>
          </div>
        </div>
        <div className="formCont">
          <h4 className="formHeader">
            <span className="formSpan">לתיאום פגישה</span> השאירו פרטים ונציגנו
            יחזרו אליכם במהרה
          </h4>
          <form className="form">
            <div className="inputCont">
              <input
                type="text"
                placeholder="שם"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </div>
            <div className="inputCont">
              <input
                type="text"
                placeholder="אימייל"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>
            <div className="inputCont">
              <input
                type="text"
                placeholder="טלפון"
                value={state.tel}
                onChange={(e) => setState({ ...state, tel: e.target.value })}
              />
            </div>
            <div className="inputCont" id="sub">
              {isLoading ? (
                <div className="spinner">
                  {" "}
                  <img src={spinner} width="100%" />
                </div>
              ) : (
                <input
                  type="button"
                  value="שלח"
                  className="submit"
                  onClick={() => sendEmail()}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
