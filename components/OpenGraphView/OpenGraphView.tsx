import { useEffect, useContext } from "react";
import OpenGraphCard from "../OpenGraphCard/OpenGraphCard";
import { OGDataContext } from "../../context/ogdata.context";
import styles from "./OpenGraphView.module.css";

import Prism from "prismjs"; // Prism
import "prismjs/themes/prism-okaidia.min.css"; // Import theme

import "prismjs/components/prism-json";

import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

type OpenGraphViewProps = {
  title: string;
  url: string;
  description: string;
  image: string;
};

export default function OpenGraphView() {
  const data = useContext(OGDataContext);

  useEffect(() => {
    Prism.highlightAll();
  });

  const code = `
    {
        "title": "${data.title}",
        "url": "${data.url}",
        "description": "${data.description}",
        "cover_image": "${data.image}"
    }
  `;

  return (
    <div className={styles.graph_view}>
      <pre style={{ width: "400px" }}>
        <code className="language-json">{code}</code>
      </pre>

      <OpenGraphCard
        title={data.title}
        url={data.url}
        description={data.description}
        image={data.image}
      />
    </div>
  );
}
