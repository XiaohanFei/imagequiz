import Home from './components/Home';
import Register from './components/Register';
import Menu from './components/Menu';
import Login from './components/Login';
import Quiz from './components/Quiz';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Row>
          <Col>This is header </Col>
        </Row>

        <Row>
          <Col><Menu /> </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Quiz/:quid" element={<Quiz />} />
      </Routes>
      <Container fluid>
        <Row>
          <Col>This is footer </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
