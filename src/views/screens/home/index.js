//Packages
import React from "react";
import { connect } from 'react-redux'

// Components
import useComponents from "../../../components"

const Home = (props) => {
  const { Typography, useInputs, Button, Table} = useComponents();
  const { InputForm } = useInputs();
  const {assignment, addAssignment} = props
  return <div className="px-4 pt-8">
    <Typography variant="h1">Asigaciones de dotación</Typography>
    <Typography variant="p">Asigna los dispositivos al personal, escribe el nombre de la persona y el serial del equipo para ser asignado</Typography>
    <div className="flex flex-col space-y-2 lg:grid grid-cols-3 my-6 px-4">
      <InputForm id="nameUser" name="nameUser" placeholder="Nombre de la persona"/>
      <InputForm id="numberSerial" name="numberSerial" placeholder="Ingrese numero serial"/>
      <Button className="" label="Asignar" onClick={() => addAssignment()}/>
    </div>
    <Table rows={assignment}/>
  </div>;
};

const mapStateToProps = state => {
  return {
  assignment: state.reducer.assignment,
}}

const mapDispatchToProps = dispatch => {
  return {
  addAssignment(o) {
    dispatch({
      type: "ADD_ASSIGNMENT",
      id: '123456',
      name: 'Sammy Guttman'
    })
  }
}}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
