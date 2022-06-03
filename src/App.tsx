import React, { useEffect } from 'react';
import RootRoutes from './modules/navigation';
import { useActions } from './modules/hooks/useActions';

const App: React.FC = () => {
  const { getCategories } = useActions();

  useEffect(() => {
    getCategories();
  }, []);

  return <RootRoutes />;
};

export default App;