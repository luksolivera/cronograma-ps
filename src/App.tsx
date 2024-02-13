import './global.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useScrollToTop } from './hooks/use-scroll-to-top';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Router from './routes/sections';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ThemeProvider from './theme';

const App = () => {

  
  useScrollToTop();
  
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
  
};

export default App;
