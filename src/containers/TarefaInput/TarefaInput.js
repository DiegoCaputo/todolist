import React from "react";
import './TarefaInput.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import { addTarefa } from "../../actions/index";
import { connect } from 'react-redux'

let TarefaInput = ({ dispatch }) => {
  let input;

  return (

    <Form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTarefa(input.value))
      input.value = ''
    }}>
      <Row>
        <Col md="9">
          <FormGroup>
            <input className="form-control" ref={node => {
              input = node
            }} type="text" placeholder="Informe a tarefa" />
          </FormGroup>
        </Col>
        <Col md="3">
          <Button color="success">ADICIONAR</Button>
        </Col>
      </Row>
    </Form>

  );
}

TarefaInput = connect()(TarefaInput)

export default TarefaInput
