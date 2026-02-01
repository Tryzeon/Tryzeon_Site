'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Apple 風格文字逐字淡入組件
 * 滾動時每個字元依序淡入
 */
interface WordByWordRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
}

export function WordByWordReveal({ 
  text, 
  className = '',
  highlightWords = [],
  highlightColor = '#0066CC'
}: WordByWordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.3']
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const isHighlight = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        );
        
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlight={isHighlight}
            highlightColor={highlightColor}
          >
            {word}
          </Word>
        );
      })}
    </div>
  );
}

interface WordProps {
  children: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  isHighlight?: boolean;
  highlightColor?: string;
}

function Word({ children, progress, range, isHighlight, highlightColor }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.25em] ${isHighlight ? '' : ''}`}
    >
      <span style={isHighlight ? { color: highlightColor } : {}}>
        {children}
      </span>
    </motion.span>
  );
}

/**
 * Apple 風格文字逐行淡入組件
 * 滾動時每行文字依序淡入
 */
interface LineByLineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
}

export function LineByLineReveal({ 
  lines, 
  className = '',
  lineClassName = ''
}: LineByLineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.25']
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, i) => {
        const start = i / lines.length;
        const end = start + (1 / lines.length);
        
        return (
          <Line
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            className={lineClassName}
          >
            {line}
          </Line>
        );
      })}
    </div>
  );
}

interface LineProps {
  children: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  className?: string;
}

function Line({ children, progress, range, className }: LineProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [30, 0]);

  return (
    <motion.div
      style={{ 
        opacity, 
        y
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple 風格字元逐個淡入組件
 * 滾動時每個字元依序淡入，適合標題
 */
interface CharByCharRevealProps {
  text: string;
  className?: string;
  charClassName?: string;
}

export function CharByCharReveal({ 
  text, 
  className = '',
  charClassName = ''
}: CharByCharRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.4']
  });

  const chars = text.split('');

  return (
    <div ref={containerRef} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + (1 / chars.length) * 2; // 重疊動畫
        
        return (
          <Char
            key={i}
            progress={scrollYProgress}
            range={[start, Math.min(end, 1)]}
            className={charClassName}
          >
            {char === ' ' ? '\u00A0' : char}
          </Char>
        );
      })}
    </div>
  );
}

interface CharProps {
  children: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  className?: string;
}

function Char({ children, progress, range, className }: CharProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [20, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}

/**
 * Apple 風格段落淡入組件
 * 整個段落隨滾動從模糊到清晰
 */
interface ParagraphRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ParagraphReveal({ children, className = '' }: ParagraphRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.5']
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        y
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
