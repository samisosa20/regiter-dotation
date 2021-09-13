// Packages
import {checkSchema} from "express-validator";

const valEquipment = {
  all: checkSchema({
  serial: {
    in : ['body', 'query'],
    isString: true,
    exists: true,
    errorMessage: 'serial is wrong'
  },
  owner: {
    in : ['body', 'query'],
    isString: true,
    exists: true,
    errorMessage: 'owner is wrong'
  },
  email: {
    in : ['body', 'query'],
    isString: true,
    exists: true,
    errorMessage: 'email is wrong'
  },
  name: {
    in : ['body', 'query'],
    isString: true,
    exists: true,
    errorMessage: 'name is wrong'
  },
  system: {
    in : ['body', 'query'],
    isString: true,
    exists: true,
    errorMessage: 'system is wrong'
  },
  type: {
    in : ['body', 'query'],
    isString: true,
    exists: true,
    errorMessage: 'type is wrong'
  }
  })
};


export default valEquipment;
