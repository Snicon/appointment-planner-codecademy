import React from "react";

export const ContactPicker = ({ contacts, handleChange, value, name }) => {
  return (
    <>
      <label htmlFor="contactPicker">Pick contact</label>
      <select
        onChange={handleChange}
        value={value}
        name={name}
        id="contactPicker"
      >
        <option defaultValue={true} value="">
          No Contact Selected
        </option>

        {contacts.map((contact, index) => {
          return (
            <option value={contact.name} key={index}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
