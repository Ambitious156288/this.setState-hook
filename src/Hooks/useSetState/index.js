import { useState } from 'react';

const useSetState = (initialState = {}) => {
  const [state, setFunction] = useState(initialState);

  const setState = newState => {
    setFunction(prevState => {
      if (typeof newState === 'function') {
        const result = newState(prevState);
        if (result === null) {
          return null;
        }

        return {
          ...prevState,
          ...result,
        };
      }
      return {
        ...prevState,
        ...newState,
      };
    });
  };

  return [state, setState];
};

export default useSetState;
