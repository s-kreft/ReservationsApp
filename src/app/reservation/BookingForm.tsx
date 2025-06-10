"use client";

import DatePicker from "react-datepicker";

export default function BookingForm() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Booking Form</legend>

      <label className="label">Place to rent</label>
      <input type="text" className="input" placeholder="my-awesome-page" />

      <label className="label">Start Date</label>
      <input
        id="date"
        className="input"
        type="date"
        // onChange={(e) => {
        //   setDate(e.target.value);
        //   validate();
        // }}
        // value={date}
      />

      <label className="label">End Date</label>
      <input
        id="date"
        className="input"
        type="date"
        // onChange={(e) => {
        //   setDate(e.target.value);
        //   validate();
        // }}
        // value={date}
      />

      <label className="label">Comments</label>
      <input type="text" className="input" placeholder="My awesome page" />

      <label className="label"></label>
      <button className="btn btn-soft btn-primary">Submit</button>
    </fieldset>
  );
}
