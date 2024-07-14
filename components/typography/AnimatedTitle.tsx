"use client";
import React, { useState, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

const AnimatedTitle = () => {
    const words = ["North G8", "ng8", "northg8", "north g8"];
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newText, setNewText] = useState(words[0]);
    const [isDelay, setIsDelay] = useState(false);
    const intervalDuration = 200;
    const delayDuration = 10000; // 5 seconds

   useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isDelay) {
            interval = setTimeout(() => {
                setIsDelay(false);
                setIsDeleting(true);
            }, delayDuration);
        } else {
            interval = setInterval(() => {
                setDisplayText((prev) => {
                    if (isDeleting) {
                        if (prev.length > 0) {
                            return prev.slice(0, -1);
                        } else {
                            setIsDeleting(false);
                            let randomIndex = Math.floor(Math.random() * words.length);
                            while (newText == words[randomIndex]) {
                                randomIndex = Math.floor(Math.random() * words.length);
                            }
                            setNewText(words[randomIndex]);
                            setCurrentIndex(0);
                            setIsDelay(false);
                            clearInterval(interval);
                            return '';
                        }
                    } else {
                        if (currentIndex < newText.length) {
                            setCurrentIndex((prevIndex) => prevIndex + 1);
                            return newText.slice(0, currentIndex + 1);
                        } else {
                            setIsDelay(true);
                            clearInterval(interval);
                            return newText;
                        }
                    }
                });
            }, intervalDuration);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(interval);
        };
    }, [isDeleting, currentIndex, newText, isDelay, words]);
   
    return (
        <h1 className="text-9xl font-semibold text-typography-black">
            {displayText}
        </h1>
    );
};

export default AnimatedTitle;
