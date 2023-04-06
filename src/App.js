import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import currencies from "./Currencies";

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
      <Header />
      <section>
        <Form result={result} calculatedResult={calculatedResult} />
      </section>
      <Footer />
    </Container>
  );
};

export default App;