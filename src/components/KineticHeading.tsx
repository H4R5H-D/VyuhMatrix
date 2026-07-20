"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/**
 * Kinetic heading — reveals word-by-word with a blur-rise.
 * Award-site signature: type as the hero, animated with intent.
 *
 * Pass segments as an array; use { accent: true } to color a word red,
 * or { br: true } to force a line break.
 */
type Segment = { text?: string; accent?: boolean; br?: boolean };

export function KineticHeading({
  segments,
  className = "",
  style,
  delay = 0,
}: {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
  delay?: number;
}) {
  let wordIndex = 0;

  return (
    <h1 className={className} style={style} aria-label={segments.map((s) => s.text ?? " ").join(" ")}>
      {segments.map((seg, i) => {
        if (seg.br) return <br key={`br-${i}`} />;
        const idx = wordIndex++;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: delay + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
            style={{ color: seg.accent ? "#FF1E1E" : undefined, marginRight: "0.28em" }}
          >
            {seg.text}
          </motion.span>
        );
      })}
    </h1>
  );
}

/** Simple wrapper for animating any block in on scroll with a refined blur-rise. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
