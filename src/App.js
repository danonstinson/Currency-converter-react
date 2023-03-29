import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";


function App() {
  const [result, setResult] = useState("N/A");

  const calculatedResult = (amount, rate) => {
    setResult(result => amount * rate)
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
