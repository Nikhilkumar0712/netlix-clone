export const checkValidations = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordValid = "123456"
  

  if (!isEmailValid && !isPasswordValid) {
    return "Enter Valid Email ID and Password";
  } else if (!isEmailValid) {
    return "Enter Valid Email ID";
  } else if (!isPasswordValid) {
    return "Enter Valid Password";
  }
  return null; 
};
