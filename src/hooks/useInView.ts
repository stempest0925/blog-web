import { useEffect, useState } from "react";

type Props = Partial<{
  threshold: number | number[];
  rootMargin: string;
  triggerOnce: boolean;
}>;

export default function useInView({ threshold, rootMargin, triggerOnce }: Props) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce]);

  return { setRef, inView };
}
