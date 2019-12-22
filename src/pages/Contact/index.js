import React, { useState } from 'react';
import { TextInput, TextArea, Button } from 'carbon-components-react';
import ReCAPTCHA from 'react-google-recaptcha';

import { Container, WrapperForm } from './styles';
import { SectionTitle } from '../../styles';
import Layout from '../../components/Layout';

export default function Contact() {
  const recaptchaRef = React.createRef();

  const [valid, setValid] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!valid) {
      return false;
    }

    fetch('https://submit-form.com/n8XPZiEXzeUWnesOyFHCx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name, message, email }),
    })
      .then(() => {
        setName('');
        setMessage('');
        setEmail('');
        setValid(false);
      })
      .catch(() => setValid(false));
  };

  const onCaptchaChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <Layout>
      <Container>
        <SectionTitle>Contact</SectionTitle>

        <WrapperForm className="some-class" onSubmit={handleSubmit}>
          <TextInput
            id="name"
            name="name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            labelText="Type here your contact name"
            light={false}
            placeholder="Ex: João da Silva"
            type="text"
          />

          <TextInput
            id="email"
            required
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            labelText="Type here your contact email"
            light={false}
            placeholder="Ex: joaodasilva@email.com"
            type="email"
          />

          <TextArea
            id="message"
            required
            name="message"
            cols={80}
            value={message}
            onChange={e => setMessage(e.target.value)}
            labelText="Type here your text message"
            placeholder="Ex: Good morning Tadeu, ..."
            rows={4}
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfwU8kUAAAAAL8TZLOVM0vPrK-p69Lo8J6u0ktN"
            onChange={onCaptchaChange}
            onErrored={() => setValid(false)}
          />

          <Button kind="primary" tabIndex={0} type="submit">
            Send Message
          </Button>
        </WrapperForm>
      </Container>
    </Layout>
  );
}
