import React, { createContext, useCallback, useContext, useState } from 'react';

export const Counter = createContext({});

export function CounterProvider({ children }) {
    const [Count, setCount] = useState(0);

    function useCounter() {
        const increment = useCallback(() => setCount(Count => Count + 1), []);
        const decrement = useCallback(() => setCount(Count => Count - 1), []);
        return {Count, increment, decrement};
    }
    return (
        <Counter.Provider value={{ useCounter }}>
          {children}
        </Counter.Provider>
      )
}
export function useCounterContext() {
    return useContext(Counter);
}