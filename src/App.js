import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Container>
      <Header />
      <section>
        <Form />
      </section>
      <Footer />
    </Container>
  );
};

export default App;
