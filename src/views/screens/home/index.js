//Packages
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// Components
import useComponents from "../../../components";

// Provider
import useProviders from "../../../api/providers";

const Home = (props) => {
  const { Typography, useInputs, Button, Table } = useComponents();
  const { useEquipment } = useProviders();
  const { listAssignments, addAssignments } = useEquipment();
  const { InputForm } = useInputs();
  const {
    assignment,
    initData,
    addData,
    showMessage,
    status,
    message,
    hiddenMessage,
    colorMessage
  } = props;
  const [form, setForm] = useState({
    serial: "",
    owner: "",
    email: "",
    name: "",
    system: "",
    type: "",
  });
  useEffect(async () => {
    await listAssignments().then((r) => initData(r.data.result));
  }, []);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    addAssignments(form)
      .then((r) => {
        addData(r.data);
        setTimeout(() => hiddenMessage(), 1500);
      })
      .catch((err) => {
        showMessage(err.response);
        setTimeout(() => hiddenMessage(), 1500);
      });
  };
  return (
    <div className="px-4 pt-8">
      <Typography variant="h1">Asigaciones de dotación</Typography>
      <Typography variant="p">
        Asigna los dispositivos al personal, escribe el nombre de la persona y
        el serial del equipo para ser asignado
      </Typography>
      <div className="flex flex-col space-y-3 lg:grid grid-cols-3 my-6 px-4">
        <InputForm
          id="numberSerial"
          name="serial"
          placeholder="Ingrese numero serial"
          className="mt-3"
          onChange={handleChange}
        />
        <InputForm
          id="nameUser"
          name="owner"
          placeholder="Nombre de la persona"
          onChange={handleChange}
        />
        <InputForm
          id="email"
          name="email"
          placeholder="Email de la persona"
          type="email"
          onChange={handleChange}
        />
        <InputForm
          id="nameEqui"
          name="name"
          placeholder="Nombre del equipo"
          onChange={handleChange}
        />
        <InputForm
          id="system"
          name="system"
          placeholder="Sistema del equipo"
          onChange={handleChange}
        />
        <InputForm
          id="type"
          name="type"
          placeholder="Tipo"
          onChange={handleChange}
        />
        <Button
          className="rounded"
          label="Asignar"
          onClick={() => handleSubmit()}
        />
      </div>
      <Table rows={assignment} />
      <div
        className={`${colorMessage} ${
          status === 0 ? "hidden" : null
        } w-max py-2 px-4 absolute bottom-2 left-0 right-0 mx-auto rounded-lg font-semibold`}
      >
        {message}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assignment: state.reducer.assignment,
    status: state.reducer.status,
    message: state.reducer.message,
    colorMessage: state.reducer.colorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initData(o) {
      dispatch({
        type: "INIT_DATA",
        data: o,
      });
    },
    addData(s) {
      dispatch({
        type: "ADD_DATA",
        data: s,
      });
    },
    showMessage(err) {
      dispatch({
        type: "SHOW_ERROR",
        data: err,
      });
    },
    hiddenMessage() {
      dispatch({
        type: "HIDDEN_MESSAGE",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
