import { Suspense, lazy } from "react";
import LazyScrolling from "../components/LazyScrolling";
import { CareerLoadingScreen } from "../components/Utils";

const Career = lazy(() => import("../components/Career"));
const FreeLancing = lazy(() => import("../components/FreeLancing"));
const Intro = lazy(() => import("../components/Intro"));
const Projects = lazy(() => import("../components/Projects"));

function Home() {
  return (
    <>
      <Intro />
      <LazyScrolling>
        <Suspense fallback={<CareerLoadingScreen />}>
          <Career />
        </Suspense>
      </LazyScrolling>
      <LazyScrolling>
        <Suspense>
          <Projects />
        </Suspense>
      </LazyScrolling>
      <LazyScrolling>
        <Suspense>
          <FreeLancing />
        </Suspense>
      </LazyScrolling>
    </>
  );
}

export default Home;
