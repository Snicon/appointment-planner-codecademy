import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  currentName,
  setCurrentName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="currentName">Name</label>
        <input
          name="currentName"
          id="currentName"
          value={currentName}
          onChange={(event) => setCurrentName(event.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          min={getTodayString()}
          name="date"
          id="date"
          type="date"
          value={date}
          required
          onChange={(event) => setDate(event.target.value)}
        />

        <label htmlFor="time">Time</label>
        <input
          name="time"
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />

        <ContactPicker
          name="contact"
          value={contact}
          handleChange={(e) => setContact(e.target.value)}
          contacts={contacts}
        />

        <button type="submit">Add appointment</button>
      </form>
    </>
  );
};
