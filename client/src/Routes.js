import { Route, Routes as Switch } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Answer from './pages/Answer/Answer';
import Login from "./pages/Login/Login";
import Question from './pages/Question/Question';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Login /> } />
      <Route exact path="/question" element={<Question /> } />
      <Route exact path="/answer" element={<Answer /> } />
      <Route exact path="/admin" element={<Admin /> } />
    </Switch >
  );
}
