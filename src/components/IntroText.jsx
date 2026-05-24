import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail, IoMdDownload } from "react-icons/io";
import { experience } from "../Utils";

const bodySegments = [
  {
    text: "I specialize in building scalable web applications using ",
    style: "text-white",
  },
  {
    text: "React JS, JavaScript, Typescript, Node.js, and MongoDB",
    style: "text-orange-400",
  },
  { text: ", with additional expertise in ", style: "text-white" },
  { text: "Rust", style: "text-orange-400" },
  {
    text: " for systems programming. My work spans both front-end and back-end development, making me a versatile full-stack engineer. I also have hands-on experience with AWS services such as ",
    style: "text-white",
  },
  {
    text: "Lambda, S3, API Gateway, CloudFront, and DynamoDB",
    style: "text-orange-400",
  },
  {
    text: ", enabling me to design and deploy cloud-native solutions.",
    style: "text-white",
  },
];

function buildWords(segs) {
  const words = [];
  segs.forEach((seg) => {
    const leadingSpace = seg.text.match(/^\s+/)?.[0];
    if (leadingSpace) {
      if (words.length > 0) words[words.length - 1].text += leadingSpace;
      else words.push({ text: leadingSpace, style: seg.style });
    }
    (seg.text.match(/\S+\s*/g) ?? []).forEach((part) =>
      words.push({ text: part, style: seg.style }),
    );
  });
  return words;
}

function AnimatedText({
  words,
  startDelay = 0,
  delayPerWord = 45,
  onComplete,
  instant = false,
}) {
  const [visibleCount, setVisibleCount] = useState(() =>
    instant ? words.length : 0,
  );

  useEffect(() => {
    if (instant) {
      onComplete?.();
      return;
    }
    if (!words.length) return;
    let count = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        count += 1;
        setVisibleCount(count);
        if (count >= words.length) {
          clearInterval(id);
          onComplete?.();
        }
      }, delayPerWord);
      return () => clearInterval(id);
    }, startDelay);
    return () => clearTimeout(start);
  }, [words, instant, startDelay, delayPerWord, onComplete]);

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block whitespace-pre transition-all duration-300 ${word.style} ${
            i < visibleCount
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          {word.text}
        </span>
      ))}
    </>
  );
}

export default function IntroText() {
  const exp = experience();
  const segments = useMemo(
    () => [
      { text: "Hello, I'm ", style: "text-white" },
      {
        text: "Guru Eswar Sainath Reddy Kummithi (Eswar)",
        style: "text-teal-400 text-3xl",
      },
      {
        text: " , a Bengaluru-based software developer with ",
        style: "text-white",
      },
      { text: exp, style: "text-orange-400 font-bold" },
      { text: " of professional experience.", style: "text-white" },
    ],
    [exp],
  );

  const headingWords = useMemo(() => buildWords(segments), [segments]);
  const bodyWords = useMemo(() => buildWords(bodySegments), []);
  const [showBody, setShowBody] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [headingDone, setHeadingDone] = useState(false);
  const [bodyDone, setBodyDone] = useState(false);

  const onHeadingComplete = useCallback(() => {
    setHeadingDone(true);
    setTimeout(() => setShowBody(true), 200);
  }, []);

  const onBodyComplete = useCallback(() => {
    setBodyDone(true);
    setTimeout(() => setShowButtons(true), 300);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-20 text-center gap-6">
      <div className="space-y-6">
        <p>
          <AnimatedText
            key={headingWords.length}
            words={headingWords}
            startDelay={200}
            delayPerWord={120}
            instant={headingDone}
            onComplete={onHeadingComplete}
          />
        </p>

        <p
          className={`transition-opacity duration-300 ${
            showBody ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {showBody && (
            <AnimatedText
              key={bodyWords.length}
              words={bodyWords}
              startDelay={0}
              delayPerWord={120}
              instant={bodyDone}
              onComplete={onBodyComplete}
            />
          )}
        </p>
      </div>
      <AdditionalButtons showButtons={showButtons} />
    </section>
  );
}

function AdditionalButtons({ showButtons }) {
  return (
    <div
      className={`transition-all duration-500 ${
        showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex gap-4 tracking-wider capitalize md:ml-20">
        <a
          href="https://resume-guru-eswar-sainath-reddy-k.s3.ap-south-2.amazonaws.com/kummithi-guru-eswar-sainath-reddy-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 border-2 border-[#0c8f98] rounded-2xl text-[#0c8f98] font-bold text-md hover:text-teal-400 hover:border-teal-400 cursor-pointer transition-all duration-300"
        >
          <div className="flex justify-center items-center gap-1.5">
            <IoMdDownload /> Resume
          </div>
        </a>
        <Link
          to="/getintouch"
          className="capitalize px-3 py-2 border border-none rounded-2xl bg-[#0c8f98] hover:bg-teal-500 font-bold text-md cursor-pointer md:ml-20 transition-all duration-300"
        >
          <div className="flex justify-center items-center font gap-1.5">
            <IoIosMail className="text-xl" />
            Get in touch
          </div>
        </Link>
      </div>
    </div>
  );
}
