import { Suspense, lazy } from "react";
import LazyScrolling from "../components/LazyScrolling";
import {
  CareerLoadingScreen,
  ProjectsLoadingScreen,
  IndependentLoadingScreen,
  FadeIn,
} from "../components/Utils";
import GetInTouch from "../components/GetInTouch";

const Journey = lazy(() => import("../components/Journey"));
const Intro = lazy(() => import("../components/Intro"));
const Projects = lazy(() => import("../components/Projects"));

function Home() {
  return (
    <>
      <Intro />
      <LazyScrolling>
        <Suspense fallback={<CareerLoadingScreen />}>
          <FadeIn>{<Journey />}</FadeIn>
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
        <Suspense fallback={<ProjectsLoadingScreen />}>
          <FadeIn>
            <GetInTouch />
          </FadeIn>
        </Suspense>
      </LazyScrolling>
    </>
  );
}

export default Home;
