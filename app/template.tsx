'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface TemplateProps {
    children: ReactNode;
}

// Apple-style page transition variants
const pageVariants = {
    initial: {
        opacity: 0,
        y: 8,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1], // Apple's easing curve
        },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function Template({ children }: TemplateProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
