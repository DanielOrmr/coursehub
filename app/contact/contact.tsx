"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setMessage(
      response.ok
        ? "Message sent successfully."
        : "Something went wrong."
    );

    event.currentTarget.reset();
  }

  return (
    <main>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full name"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
        />

        <button type="submit">Send</button>
      </form>

      <p>{message}</p>
    </main>
  );
}