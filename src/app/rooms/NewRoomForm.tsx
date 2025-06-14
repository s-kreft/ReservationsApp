import { useFormik } from "formik";
import { Room } from "../types";

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
  });
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <form onSubmit={formik.handleSubmit}>
        {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"> */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            className="input"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Dodaj
        </button>
      </form>
    </fieldset>
  );
}
