import React, { useState } from 'react';
import Header from './components/Header';
import { LanguageProvider } from './components/LanguageContext';
import LeftContent from './components/LeftContent';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(prev => [...prev, newItem]);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full md:w-2/3 lg:w-5/6 p-6 bg-purple-50 rounded-xl shadow-lg">
          <Header addItem={addItem} />
          <LeftContent items={items} />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;