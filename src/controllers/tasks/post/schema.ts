import * as yup from "yup";

export default yup.object().shape({
  body: yup.object().shape({
    id: yup.string().uuid().required(),
    title: yup.string().max(100).required(),
    completed: yup.boolean().required(),
  }),
});
