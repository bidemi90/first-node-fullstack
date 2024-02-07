const yup = require("yup");

const uservalidationschema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  phoneNumber: yup.number().required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and symbols."
    ),
});

module.exports = { uservalidationschema };
