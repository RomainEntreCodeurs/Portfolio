import { useEffect } from "react";
import { APP_TITLE } from "./utils/constants";
import Routes from "./routes/Routes";
import "./utils/i18n";

export default function App() {
  useEffect(() => {
    document.title = APP_TITLE;
  }, []);

  return <Routes />;
}
