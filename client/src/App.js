import FeedbackProvider from "./context/FeedbackProvider";
import Routes from "./Routes";


function App() {
  return (
    <FeedbackProvider>
      <Routes />
    </FeedbackProvider>
  );
}

export default App;
