import { createContext, useContext, useState, ReactNode } from "react";

// Define context type
interface BackgroundContextType {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

// Create the context
const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

// Create a provider component
export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-blue-600 bg-opacity-30"); // Default white

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Custom hook to use the context
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};
