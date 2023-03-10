import * as Yup from "yup";

export const notesFormSchema = Yup.object({
  title: Yup.string().required("This field is required."),
  content: Yup.string().required("This field is required."),
});
