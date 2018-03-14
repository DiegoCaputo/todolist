import React from "react";
import ReactDOM from "react-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import TarefaInput from "../containers/TarefaInput/TarefaInput";
import TarefasVisiveis from "../containers/TarefasVisiveis";
import Filtros from "../components/Filtros/Filtros"
import Ordenacao from "./Ordenacao/Ordenacao";
import OrdenacaoLink from "../containers/OrdenacaoLink";

const App = () => (

  <Container>
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <div className="tarefas align-middle">
          <TarefaInput></TarefaInput>
          <OrdenacaoLink></OrdenacaoLink>
          <TarefasVisiveis></TarefasVisiveis>
          <Filtros></Filtros>
        </div>
      </Col>
    </Row>
  </Container>

)

export default App;