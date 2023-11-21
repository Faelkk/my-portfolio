import ReactTypingEffect from "react-typing-effect";

const TyppingEffect = ({ text }: { text: string }) => (
  <ReactTypingEffect
    text={text}
    speed={100}
    eraseSpeed={100}
    typingDelay={10}
    cursorClassName="text-primary-750 pl-1"
    className="text-[1.2rem] text-center text-blue-950  font-bold md:text-4xl w-full md:text-start"
  />
);

export default TyppingEffect;
