import MainLayout from "./layouts/MainLayout.jsx";
import Form from "./components/Form/Form.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";

export default function App() {
  return (
    <MainLayout>
      <Form />
      <Gallery />
    </MainLayout>
  );
}