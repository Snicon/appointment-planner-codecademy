import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
        />

        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="text"
          pattern="^(([+]\d{2}[ ][1-9]\d{0,2}[ ])|([0]\d{1,3}[-]))((\d{2}([ ]\d{2}){2})|(\d{3}([ ]\d{3})*([ ]\d{2})+))$"
        />

        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
