import { useState, useEffect, useRef } from "react";
import bongoStatic from "../../assets/Cat.png";
import bongoAnim from "../../assets/cats.gif"; 

export default function TypingTest() {
  const originalText = "The quick brown fox jumps over the lazy dog.";
  const [input, setInput] = useState("");
  const [start, setStart] = useState(null);
  const [time, setTime] = useState("0.000");
  const [done, setDone] = useState(false);
  const [typing, setTyping] = useState(false);
  const [focused, setFocused] = useState(false);
  const timeoutRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    if (!start || done) return;
    const id = setInterval(
      () => setTime(((Date.now() - start) / 1000).toFixed(3)),
      10
    );
    return () => clearInterval(id);
  }, [start, done]);

  useEffect(() => {
    if (input === originalText && !done) {
      setDone(true);
      setTime(((Date.now() - start) / 1000).toFixed(3));

      const resetTimer = setTimeout(() => {
        reset();
      }, 3000);

      return () => clearTimeout(resetTimer);
    }

    if (input.length === 0 && done) {
      setDone(false);
      setTime("0.000");
      setStart(null);
    }
  }, [input, originalText, done, start]);

  const reset = () => {
    setInput("");
    setStart(null);
    setTime("0.000");
    setDone(false);
    setTyping(false);
    boxRef.current?.focus();
  };

  const handleInput = (e) => {
    const value = e.target.value.slice(0, originalText.length);
    if (!start && value.length > 0) setStart(Date.now());
    setInput(value);
  };

  const handleKey = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      reset();
      return;
    }
    setTyping(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setTyping(false), 300);
  };

  return (
    <section id="Type">
      <div className="border border-neutral-700 p-4 rounded-lg bg-transparent relative">
        <p className="mb-3 text-base select-none">
          {done ? (
            <span className="text-white font-semibold">
              Nice! Your time is {time} seconds
            </span>
          ) : (
            originalText.split("").map((ch, i) => {
              let color = "text-gray-400";
              if (i < input.length) {
                color = input[i] === ch ? "text-white" : "text-red-500";
              }
              return (
                <span key={i} className={color}>
                  {ch}
                </span>
              );
            })
          )}
        </p>

        <div className="relative">
          <textarea
            ref={boxRef}
            className="w-full bg-transparent border border-neutral-700 rounded-md p-3 text-gray-100 resize-none outline-none"
            rows={2}
            placeholder="Start typing here..."
            value={done ? "Bongo Cat is celebrating" : input}
            onChange={handleInput}
            onKeyDown={handleKey}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={false}
          />

          <img
            src={done || typing ? bongoAnim : bongoStatic}
            alt="Bongo Cat"
            className="absolute -top-15 right-3 w-16"
            draggable={false}
          />
        </div>

        {!done && focused && (
          <div className="flex justify-between mt-3 text-sm text-gray-400">
            <span>
              <kbd className="px-1 py-0.5 border rounded border-gray-600 bg-neutral-800">
                TAB
              </kbd>{" "}
              - restart
            </span>
            <span className="font-mono">{time}</span>
          </div>
        )}
      </div>
    </section>
  );
}
