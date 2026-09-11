import { RouterProvider, useRouter } from '@/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { CinematicIntro } from '@/components/CinematicIntro';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { StoryHub } from '@/pages/StoryHub';
import { StoryChapter } from '@/pages/StoryChapter';
import { Work } from '@/pages/Work';
import { Contact } from '@/pages/Contact';

function Routes() {
  const { route } = useRouter();
  const path = route.path;

  let page;
  if (path === '/') page = <Home />;
  else if (path === '/about') page = <About />;
  else if (path === '/story') page = <StoryHub />;
  else if (path.startsWith('/story/')) page = <StoryChapter slug={path.split('/').pop() || ''} />;
  else if (path === '/work') page = <Work />;
  else if (path === '/contact') page = <Contact />;
  else page = <Home />; // fallback — could be a 404 but Home is safe for a personal site

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <CinematicIntro />
      <Navbar />
      <main className="flex-1">{page}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}

export default App;
