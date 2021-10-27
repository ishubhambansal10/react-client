// eslint-disable-next-line max-len
export const isTouched = (values) => Object.keys(values).some((key) => values[key].isTouched === false);

// eslint-disable-next-line max-len
export const hasError = (paramInputs) => Object.keys(paramInputs).some((key) => paramInputs[key].hasError === true);
