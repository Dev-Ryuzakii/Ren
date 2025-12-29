import { useState, useEffect } from 'react';

export const useFontSize = () => {
    const [fontSize, setFontSize] = useState<number>(100);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}%`;
    }, [fontSize]);

    const increaseFontSize = () => setFontSize(prev => Math.min(prev + 10, 150));
    const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 10, 80));
    const resetFontSize = () => setFontSize(100);

    return { fontSize, increaseFontSize, decreaseFontSize, resetFontSize };
};
