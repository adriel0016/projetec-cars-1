import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ContextProps {
    windowWidth: number, 
    setWindowWidth: React.Dispatch<React.SetStateAction<number>>,
}

export const StyleContext = createContext<ContextProps>({} as ContextProps);

interface StyleProviderProps {
    children: ReactNode,
}

export const StyleProvider = ({ children }: StyleProviderProps) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <StyleContext.Provider value={{
            windowWidth, 
            setWindowWidth
        }}>
            {children}
        </StyleContext.Provider>
    );
};

export const useStyle = () => useContext(StyleContext);