import ErrorApi from './ErrorApi';

function validatorInputs(payload: object): void {
  Object.entries(payload).forEach((input) => {
    const [key, value] = input;
    if (value === undefined) throw new ErrorApi(`${key} is required`, 400);
  });
}

export default validatorInputs;
