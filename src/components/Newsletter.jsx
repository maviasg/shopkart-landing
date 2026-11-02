import { useState } from "react";

const EMPTY_FORM = { name: "", email: "", message: "" };

function Newsletter() {
  const [form, setForm] = useState(EMPTY_FORM);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Newsletter submission:", form);
    setForm(EMPTY_FORM);
  }

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__intro">
        <h2>Newsletter</h2>
        <p>Get news about articles and updates in your inbox.</p>
      </div>

      <form
        id="newsletter-form"
        className="newsletter__form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />
      </form>

      <div className="newsletter__footer-row">
        <h2 className="newsletter__headline">
          Get
          <br />
          In Touch
        </h2>
        <button type="submit" form="newsletter-form" className="newsletter__send">
          Send
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
