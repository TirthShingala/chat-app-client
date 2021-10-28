import { BrowserRouter, Route, Switch } from "react-router-dom";
import Join from "./Join/Join";
import Chat from "./Chats/Chat";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Join />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
