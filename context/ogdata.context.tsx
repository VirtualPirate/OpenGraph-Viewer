import { createContext, useState, ReactNode } from "react";

type OGDataType = {
  title: string;
  url: string;
  description: string;
  image: string;
};

export type OGDataContextType = {
  title: string;
  url: string;
  description: string;
  image: string;

  setTitle: (arg: string) => void;
  setUrl: (arg: string) => void;
  setDescription: (arg: string) => void;
  setImage: (arg: string) => void;

  setOGData: (arg: OGDataType) => void;
};

export const OGDataContext = createContext<OGDataContextType>({
  title: "",
  url: "",
  description: "",
  image: "",

  setTitle: (arg: string) => {},
  setUrl: (arg: string) => {},
  setDescription: (arg: string) => {},
  setImage: (arg: string) => {},
  setOGData: (arg: OGDataType) => {},
});

type OGDataContextProviderType = {
  children: ReactNode;
};

export const OGDataContextProvider = ({
  children,
}: OGDataContextProviderType) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function setOGData(data: OGDataType) {
    setTitle(data.title);
    setUrl(data.url);
    setDescription(data.description);
    setImage(data.image);
  }

  return (
    <OGDataContext.Provider
      value={{
        title,
        url,
        description,
        image,
        setTitle,
        setUrl,
        setDescription,
        setImage,
        setOGData,
      }}
    >
      {children}
    </OGDataContext.Provider>
  );
};
