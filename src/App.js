import Form from "./Container/Form";
import Container from "./Container";
import Header from "./Container/Header";
import Footer from "./Container/Footer";
import { useState } from "react";
import currencies from "./Container/Form/Currencies";
import Time from "./Container/Time";

function App() {
  const [result, setResult] = useState("N/A");

  const calculatedResult = (amount, currency) => {
    const rate = currencies.find(({ prefix }) => prefix === currency).rate;

    setResult({
      result: (amount * rate).toFixed(2),
      currency
    });
  };

  return (
    <Container>
      <Time />
      <Header />
      <section>
        <Form result={result} calculatedResult={calculatedResult} />
      </section>
      <Footer />
    </Container>
  );
};

export default App;