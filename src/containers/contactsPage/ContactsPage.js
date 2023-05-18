import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicateName) {
    } else if (!duplicateName) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const foundDuplicate = () => {
      const contactFound = contacts.find((contact) => contact.name === name);

      if (contactFound !== undefined) {
        return true;
      } else {
        return false;
      }
    };
    // Definteley not done and will cause errors but I'll fix them once able to debug propperly.
    if (foundDuplicate()) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
    }
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicateName ? (
          <p>
            <span style={{ fontWeight: "bold" }}>{name}</span> is already in
            your contact list.
          </p>
        ) : (
          ""
        )}
        <ContactForm
          name={name}
          duplicateName={duplicateName}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
