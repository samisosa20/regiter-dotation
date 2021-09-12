//Packages
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// Styles
import { StyledHome, ContainerInputs, Message, Loader } from "./home.style";

// Components
import useComponents from "../../../components";

// Provider
import useProviders from "../../../api/providers";

const Home = (props) => {
  const { Typography, useInputs, Button, Table } = useComponents();
  const { useEquipment } = useProviders();
  const { listAssignments, addAssignments } = useEquipment();
  const { InputForm, CustomSelect } = useInputs();
  const {
    assignment,
    initData,
    addData,
    showMessage,
    status,
    message,
    hiddenMessage,
    colorMessage,
    show,
    loader,
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
    loader();
    await listAssignments().then((r) => {
      loader();
      initData(r.data.result);
    });
  }, []);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.value ? "type" : e.target.name]: e.value ? e.value : e.target.value,
    });
  };
  const handleSubmit = () => {
    loader();
    addAssignments(form)
      .then((r) => {
        loader();
        addData(r.data);
        setTimeout(() => hiddenMessage(), 1500);
      })
      .catch((err) => {
        loader();
        showMessage(err.response);
        setTimeout(() => hiddenMessage(), 1500);
      });
  };
  return (
    <StyledHome>
      <Typography variant="h1">Asigaciones de dotación</Typography>
      <Typography variant="p">
        Asigna los dispositivos al personal, escribe el nombre de la persona y
        el serial del equipo para ser asignado
      </Typography>
      <ContainerInputs>
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
        <CustomSelect
          id="type"
          name="type"
          className="w-11/12"
          placeholder="Tipo"
          onChange={handleChange}
          options={[
            { label: "celular", value: "celular" },
            { label: "laptop", value: "laptop" },
            { label: "impresora", value: "impresora" },
            { label: "teclado", value: "teclado" },
            { label: "mouse", value: "mouse" },
          ]}
        />
        <Button
          className="rounded col-start-3 w-11/12"
          label="Asignar"
          disabled={Object.values(form).filter((e) => e !== "").length !== 6}
          onClick={() => handleSubmit()}
        />
      </ContainerInputs>
      <Table rows={assignment} />
      <Message status={status} className={colorMessage}>
        {message}
      </Message>
      <Loader show={show}>
        <div className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center w-max m-auto absolute left-0 right-0 top-1/2">
          <div className="bg-blue-600 p-2  w-4 h-4 rounded-full animate-bounce blue-circle"></div>
          <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
          <div className="bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle"></div>
        </div>
      </Loader>
    </StyledHome>
  );
};

const mapStateToProps = (state) => {
  return {
    assignment: state.reducer.assignment,
    status: state.reducer.status,
    message: state.reducer.message,
    colorMessage: state.reducer.colorMessage,
    show: state.reducer.show,
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
    loader() {
      dispatch({
        type: "LOADER",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
