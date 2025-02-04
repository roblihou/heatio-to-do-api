import * as yup from "yup";

export default yup.object().shape({
  params: yup.object().shape({
    id: yup.string().uuid().required(),
  }),
  body: yup.object().shape({
    title: yup.string(),
    completed: yup.boolean(),
  }),
});
