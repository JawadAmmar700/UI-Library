"use client";
import { Volume, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Create a type that restricts inView based on the length/2 of the data prop
type InViewConstraint<
  N extends number,
  A extends number[] = []
> = A["length"] extends N
  ? A[number]
  : InViewConstraint<N, [...A, A["length"]]>;

// Exclude 0 and 1 from allowed numbers
type AllowedNumbers<N extends number> = Exclude<InViewConstraint<N>, 0 | 1>;

// Interface with the constrained inView property based on data length
interface IOSPickerProps<T extends readonly string[]> {
  inView: AllowedNumbers<T["length"]>;
  data: T;
  velocity: number;
  onChange: (value: string) => void;
  label: string;
}

const IOSPicker = <T extends readonly string[]>({
  data,
  inView,
  velocity,
  onChange,
  label,
}: IOSPickerProps<T>) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startPosition = useRef<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollTop = useRef<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemHeight = 30;
  const rootMargin = (inView - 1) * itemHeight;
  const containerHeight = (inView + (inView - 1)) * itemHeight;
  const [mute, setMute] = useState<boolean>(true);

  // Touch scroll logic
  useEffect(() => {
    if (!wheelRef.current) return;
    const wheel = wheelRef.current;

    const mouseDown = (e: MouseEvent) => {
      const currentPosition = e.pageY;
      startPosition.current = currentPosition;
      scrollTop.current = wheel.scrollTop;
      isDragging.current = true;
    };

    const mouseUp = (e: MouseEvent) => {
      isDragging.current = false;
    };

    const mousemove = (e: MouseEvent) => {
      e.preventDefault();

      if (isDragging.current) {
        const endPosition = e.pageY;
        const delta = (endPosition - startPosition.current) * velocity;
        wheel.scrollTop = scrollTop.current - delta;
      }
    };

    const mouseWheel = (e: WheelEvent) => {
      if (e.deltaY < 50 && e.deltaY > -50) return;
      e.preventDefault();
      const slowDownFactor = 0.2;
      const delta = e.deltaY * slowDownFactor;
      wheel.scrollTop += delta;
    };

    // Initialize
    wheel.addEventListener("mousedown", mouseDown);
    wheel.addEventListener("mouseup", mouseUp);
    wheel.addEventListener("mousemove", mousemove);
    wheel.addEventListener("mouseleave", mouseUp);
    wheel.addEventListener("wheel", mouseWheel);

    // Cleanup
    return () => {
      wheel.removeEventListener("mousedown", mouseDown);
      wheel.removeEventListener("mouseup", mouseUp);
      wheel.removeEventListener("mousemove", mousemove);
      wheel.removeEventListener("mouseleave", mouseUp);
      wheel.removeEventListener("wheel", mouseWheel);
    };
  }, []);

  useEffect(() => {
    if (!mute && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, [activeIndex, mute]);

  // Track user's scroll position and update activeIndex accordingly
  useEffect(() => {
    if (wheelRef.current) {
      setActiveIndex(0);
      wheelRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index")!);
          if (entry.isIntersecting) {
            setActiveIndex(index);
            if (data[index]) {
              onChange(data[index].toLowerCase());
            }
          }
        });
      },
      {
        threshold: 0.9,
        root: wheelRef.current,
        rootMargin: `-${rootMargin}px 0px -${rootMargin}px 0px`,
      }
    );

    if (refs.current) {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
    }

    // Cleanup observer on unmount
    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [data]);

  return (
    <div
      style={{ height: `${containerHeight}px` }}
      className="w-48 relative overflow-hidden group rounded-lg grid grid-cols-3 items-center transform-gpu"
    >
      <audio
        className="hidden"
        ref={audioRef}
        src="/minimal-pop.mp3"
        autoPlay={false}
      ></audio>
      <div
        style={{ height: `${itemHeight}px` }}
        className="bg-black/10 w-full text-sm select-none  md:text-base font-bold absolute -z-10 rounded-md flex items-center justify-end px-2 text-white"
      >
        {label}
        <button
          onClick={() => setMute((prev) => !prev)}
          className="absolute right-0 -top-7 w-4 h-4 opacity-0 rounded-full transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
        >
          {mute ? (
            <VolumeX
              className={`w-4  ${
                mute ? "scale-100 animate-fadeIn" : "scale-75 animate-fadeOut"
              } `}
            />
          ) : (
            <Volume
              className={`w-4  ${
                !mute ? "scale-100 animate-fadeIn" : "scale-75 animate-fadeOut"
              } `}
            />
          )}
        </button>
      </div>

      <div
        style={{
          paddingTop: `${rootMargin}px`,
          paddingBottom: `${rootMargin + itemHeight}px`,
        }}
        ref={wheelRef}
        className="h-full col-span-2 text-white flex flex-col overflow-y-scroll overflow-x-hidden hide-scroll-bar snap-y snap-mandatory "
      >
        {data.map((item, i) => (
          <div
            ref={(el) => {
              if (refs.current) {
                refs.current[i] = el;
              }
            }}
            key={i}
            data-index={i}
            style={{
              height: itemHeight,
            }}
            className={`
            ${
              activeIndex !== i
                ? "opacity-40 scale-75 rotate-3"
                : "opacity-100 scale-100 text-sm -rotate-3"
            }
            mt-2 text-center font-semibold select-none snap-center transition-opacity duration-100 ease-in-out transform-gpu
          `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IOSPicker;
