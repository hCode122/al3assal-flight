'use client'
import { createContext, useState, useContext } from "react";

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
    const [direction, setDirection] = useState("ltr");
    const [backArrow, setBackArrow] = useState(null)

    return (
        <DirectionContext.Provider value={{ direction, setDirection, backArrow, setBackArrow }}>
            {children}
        </DirectionContext.Provider>
    );
};

export const useDirection = () => useContext(DirectionContext);
