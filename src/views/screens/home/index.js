//Packages
import React, {useEffect} from "react";
import { connect } from 'react-redux'

// Components
import useComponents from "../../../components"

// Provider
import useProviders from "../../../api/providers"

const Home = (props) => {
  const { Typography, useInputs, Button, Table} = useComponents();
  const {useEquipment} = useProviders();
  const {listAssignments} = useEquipment();
  const { InputForm } = useInputs();
  const {assignment, initData} = props
  useEffect(() => {
    listAssignments().then(r => initData(r.data.result))
  },[])
  return <div className="px-4 pt-8">
    <Typography variant="h1">Asigaciones de dotación</Typography>
    <Typography variant="p">Asigna los dispositivos al personal, escribe el nombre de la persona y el serial del equipo para ser asignado</Typography>
    <div className="flex flex-col space-y-2 lg:grid grid-cols-3 my-6 px-4">
      <InputForm id="nameUser" name="nameUser" placeholder="Nombre de la persona"/>
      <InputForm id="numberSerial" name="numberSerial" placeholder="Ingrese numero serial"/>
      <Button className="" label="Asignar" onClick={() => initData()}/>
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
  initData(o) {
    dispatch({
      type: "INIT_DATA",
      data: o
    })
  }
}}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
