import { useRoutes } from "react-router";
import { DarkmodeProvider } from "./components/darkmode-context";
import routes from "~react-pages";
import './scss/placeholders/reset.scss';
import './scss/components/darkmode.scss';
import './scss/base.scss';

function App() {
  return (
    <>
      <DarkmodeProvider>
        {useRoutes(routes)}
      </DarkmodeProvider>
    </>
  )
}

export default App