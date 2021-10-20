import { useEffect, FC, lazy, Suspense, CSSProperties } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

/**
 * These are the slides
 * A string array is used here for two reasons
 *   1. Implicitly using numbers make re-ordering slides harder
 *   2. Explicitly importing the files increases code duplication and complexity
 * This however comes with the cost of needing suspense.
 */
const screens = ['1', '2'];
const ScreensCache: FC<{ count: number; style: CSSProperties }>[] = [];

/**
 * Preload the next and previous slides
 */
async function preloadSlide(count: number) {
  if (!screens[count] || ScreensCache[count]) {
    return;
  }
  try {
    const promise = import(`./Screens/${screens[count]}.tsx`);
    await new Promise((r) => setTimeout(r, 500));
    ScreensCache[count] = (await promise).default;
  } catch (e) {}
}

export default function App() {
  const params = useParams<any>();
  console.log(params);
  const count = Number(params.id) || 1;
  const navigate = useNavigate();

  // Get the next slide
  const Comp = ScreensCache[count - 1] || lazy(() => import(`./Screens/${screens[count - 1]}.tsx`));

  /**
   * Handle keyboard events
   */
  useEffect(() => {
    function listener(event: KeyboardEvent) {
      let newId = count;
      if (event.key === 'ArrowLeft') {
        newId = Math.max(count - 1, 1);
      } else if (event.key === 'ArrowRight') {
        newId = Math.min(count + 1, screens.length);
      }
      if (count !== newId) {
        navigate(`/${newId}`);
      }
      console.clear();
    }
    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, [count, navigate]);

  useEffect(() => {
    console.clear();
  }, []);

  /**
   * Here we preload the next and previous slides for better UX
   */
  useEffect(() => {
    preloadSlide(count);
    preloadSlide(count - 2);
  }, [count]);

  return (
    <Box width="100%" minHeight="100vh">
      <Suspense fallback={null}>
        <Container maxWidth="lg">
          <Comp count={count} style={{ display: 'inline' }} />
        </Container>
      </Suspense>
    </Box>
  );
}
