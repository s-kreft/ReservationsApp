"use client";

import DatePicker from "react-datepicker";
import { Reservation, Room } from "../types";
import { useFormik } from "formik";
import { useFormInput } from "./useFormInput";

export default function BookingForm({
  onNewReservationSubmit,
  room,
}: {
  onNewReservationSubmit: (reservation: Reservation, room: Room) => void;
  room: Room;
}) {
  const commentProps = useFormInput(null);
  const lastNameProps = useFormInput("Poppins");

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

      onNewReservationSubmit(reservation, room);
      formik.resetForm();
    },
  });
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <form onSubmit={formik.handleSubmit}>
        <legend className="fieldset-legend">Booking Form</legend>

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
        <input id="comments" {...commentProps} placeholder="Any notes?" />
        <label className="label"></label>
        <button className="btn btn-soft btn-primary">Submit</button>
      </form>
    </fieldset>
  );
}
