import { Suspense, lazy } from "react";
import LazyScrolling from "../components/LazyScrolling";
import {
  CareerLoadingScreen,
  ProjectsLoadingScreen,
  IndependentLoadingScreen,
  FadeIn,
} from "../components/Utils";

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
          <FadeIn>{<Career />}</FadeIn>
        </Suspense>
      </LazyScrolling>
      <LazyScrolling>
        <Suspense fallback={<ProjectsLoadingScreen />}>
          <FadeIn>
            <Projects />
          </FadeIn>
        </Suspense>
      </LazyScrolling>
      <LazyScrolling>
        <Suspense fallback={<IndependentLoadingScreen />}>
          <FadeIn>
            <FreeLancing />
          </FadeIn>
        </Suspense>
      </LazyScrolling>
    </>
  );
}

export default Home;
