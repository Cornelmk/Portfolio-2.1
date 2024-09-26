import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(name === '' || message === '') {
            alert('Vennligste fyll ut både navn og melding.');
            return;
        }

        const formData = {name, message};

        setSubmittedData(formData);

        setName('');
        setMessage('');
    };

    return (
        <div>
            <h2>Kontakt oss</h2>
            <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">Melding:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit">Send melding</button>
      </form>

      {/* Vis innsendt data som JSON hvis tilgjengelig */}
      {submittedData && (
        <div>
          <h3>Innsendt data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}