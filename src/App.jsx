import MainLayout from "./layouts/MainLayout.jsx";

// Пока секции пустые — будем наполнять по шагам
import Hero from "./components/Hero/Hero.jsx";
import Invitation from "./components/Invitation/Invitation.jsx";
import Timing from "./components/Timing/Timing.jsx";
import DressCode from "./components/DressCode/DressCode.jsx";
import Presence from "./components/Presence/Presence.jsx";
import Form from "./components/Form/Form.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Invitation />
      <Timing />
      <DressCode />
      <Presence />
      <Form />
      <Gallery />
    </MainLayout>
  );
}
