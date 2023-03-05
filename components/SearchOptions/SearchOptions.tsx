import styles from "./SearchOptions.module.css";
import { OGDataContext } from "../../context/ogdata.context";
import { useContext, useState, MouseEvent } from "react";
import { ButtonStateContext } from "../../context/buttonstate.context";

export default function SearchOptions() {
  console.log("render");
  const { setOGData } = useContext(OGDataContext);

  const [link, setLink] = useState("https://www.youtube.com");
  const { buttonDisableState, setButtonDisableState } =
    useContext(ButtonStateContext);

  /*
    ? This function fetches the opengraph Data from the API
  */
  const fetchOGData = async (e: MouseEvent) => {
    console.log("fetchOGData is called");
    e.preventDefault();

    setButtonDisableState(true); // ? Disable the button

    const API_URL = "https://opengraph.cyclic.app";

    const data = await fetch(
      `${API_URL}?` +
        new URLSearchParams({
          url: link,
        })
    );

    const json = await data.json();
    console.log(json);
    setOGData({
      title: json.ogTitle,
      description: json.ogDescription,
      url: json.ogUrl,
      image: json.ogImage,
    });

    setButtonDisableState(false); // ? Enable the button
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Paste a url link"
        onChange={(e) => {
          setLink(e.target.value);
        }}
        value={link}
      />
      <button
        className={styles.button}
        onClick={fetchOGData}
        disabled={buttonDisableState}
      >
        Check Website
      </button>
    </form>
  );
}
