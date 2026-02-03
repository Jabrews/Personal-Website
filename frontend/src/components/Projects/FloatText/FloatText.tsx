import { motion } from "framer-motion";

type FloatTextProps = {
    text: string;
    hover: boolean;
};

export function FloatText({ text, hover }: FloatTextProps) {
    const letters = text.split("");

    return (
        <motion.span
            style={{ display: "inline-block", overflow: "hidden" }}
            initial="rest"
            animate={hover ? "hover" : "rest"}
        >
            {letters.map((char, i) => (
                <motion.span
                    key={i}
                    className="float-text"
                    style={{ display: "inline-block" }}
                    variants={{
                        rest: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.25 },
                        },
                        hover: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                delay: i * 0.04,
                                duration: 0.4,
                                ease: "easeOut",
                            },
                        },
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
