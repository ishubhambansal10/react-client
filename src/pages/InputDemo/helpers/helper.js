// eslint-disable-next-line max-len
export const hasError = (paramInputs) => Object.keys(paramInputs).some((key) => paramInputs[key].hasError === true);

// eslint-disable-next-line max-len
export const isTouched = (paramInputs) => Object.keys(paramInputs).some((key) => paramInputs[key].isTouched === false);

export const getError = () => {};
