"use client";

import DatePicker from "react-datepicker";
import { Reservation, Room } from "../types";
import { useFormik } from "formik";

export default function BookingForm({
  onNewReservationSubmit,
}: {
  onNewReservationSubmit: (reservation: Reservation) => void;
}) {
  const formik = useFormik({
    initialValues: {
      userName: "",
      dateStart: new Date(),
      dateEnd: new Date(),
      comments: "",
    },
    onSubmit: (values) => {
      let reservation = {
        userName: values.userName,
        dateStart: values.dateStart,
        dateEnd: values.dateEnd,
        comments: values.comments,
      } as Reservation;

      onNewReservationSubmit(reservation);
      formik.resetForm();
    },
  });
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <form onSubmit={formik.handleSubmit}>
        <legend className="fieldset-legend">Booking Form</legend>

        <label className="label">Place to rent</label>
        <input
          id="userName"
          type="text"
          className="input"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />

        <label className="label">Start Date</label>
        <DatePicker
          selected={formik.values.dateStart}
          onChange={(date) => formik.setFieldValue("dateStart", date)}
          className="input"
        />

        <label className="label">End Date</label>
        <DatePicker
          selected={formik.values.dateEnd}
          onChange={(date) => formik.setFieldValue("dateEnd", date)}
          className="input"
        />

        <label className="label">Comments</label>
        <input
          id="comments"
          type="text"
          className="input"
          onChange={formik.handleChange}
          value={formik.values.comments}
          placeholder="Any notes?"
        />
        <label className="label"></label>
        <button className="btn btn-soft btn-primary">Submit</button>
      </form>
    </fieldset>
  );
}
