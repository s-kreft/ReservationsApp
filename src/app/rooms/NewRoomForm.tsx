import { useFormik } from "formik";
import { Room } from "../types";
import * as Yup from "yup";

export default function NewRoomForm({
  onNewRoomSubmit,
}: {
  onNewRoomSubmit: (room: Room) => void;
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (values) => {
      let room = {
        name: values.name,
        description: values.description,
      } as Room;

      onNewRoomSubmit(room);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .min(5, "Must be at least 5 characters")
        .required("Required"),
    }),

    validateOnChange: false,
    validateOnBlur: true,
  });
  return (
    // <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    <form onSubmit={formik.handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-error">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            className="input"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.description && formik.touched.description && (
            <div className="text-error">{formik.errors.description}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          Dodaj
        </button>
      </fieldset>
    </form>
  );
}
