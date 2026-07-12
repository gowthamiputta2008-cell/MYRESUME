import { useState } from "react";

export default function Recommendations() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { name, msg }]);
    setName("");
    setMsg("");
  };

  return (
    <section id="recommend" className="reveal">
      <h2>Recommendations</h2>

      {reviews.map((r, i) => (
        <div className="review" key={i}>
          <b>{r.name}</b>
          <p>{r.msg}</p>
        </div>
      ))}

      <form onSubmit={submit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Message"
        />
        <button>Submit</button>
      </form>
    </section>
  );
}
