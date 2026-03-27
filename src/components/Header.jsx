
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';

const Header = ({ addItem }) => {
  const { language, setLanguage, t } = useLanguage();

  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showModal2, setShowModal2] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [error2, setError2] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email && password) {
      setUser({ email });
      setShowModal(false);
      setEmail('');
      setPassword('');
    } else {
      setError('Email and password required');
    }
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    setError2('');

    const priceNum = parseFloat(itemPrice);

    if (itemName && !isNaN(priceNum) && priceNum > 0) {
      addItem({ name: itemName, price: priceNum });
      setItemName('');
      setItemPrice('');
      setShowModal2(false);
    } else {
      setError2('Valid item name and positive price required');
    }
  };

  const handleGoogleLogin = () => {
    setUser({ email: 'google-user@example.com' });
    setShowModal(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      
      <div className=" top-0 z-40 flex flex-col md:flex-row md:justify-between md:items-center gap-3 p-4 bg-white shadow-sm rounded-t-xl">

        <h5 className="md:text-lg font-semibold text-center md:text-left">
          {t('ofspace')}
        </h5>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4">

          
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-md px-2 md:px-3 py-1 text-xs md:text-sm"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="en-US">American</option>
            <option value="zh">中文</option>
          </select>

      
          {user ? (
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <span className="text-xs md:text-sm text-gray-700 break-all">
                {user.email}
              </span>

              <button
                onClick={handleLogout}
                className="px-3 md:px-4 py-1 md:py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-xs md:text-sm"
              >
                {t('logout')}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="px-3 md:px-4 py-1 md:py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700  md:text-sm"
            >
              {t('login')}
            </button>
          )}

      
          <button
            className="px-3 md:px-4 py-1 md:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs md:text-sm"
            onClick={() => setShowModal2(true)}
          >
            + {t('createWorkspace')}
          </button>

        </div>
      </div>

      {/* Login  */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">

            <h2 className="text-xl font-bold mb-4">{t('login')}</h2>

            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            <form onSubmit={handleLogin}>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 mb-4 text-sm"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                {t('login')}
              </button>

            </form>

            <div className="my-4 text-center text-gray-500">
              or
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 flex items-center justify-center"
            >

              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>

              Google

            </button>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-gray-600 hover:underline"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

      {/* Add Item  */}
      {showModal2 && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">

            <h2 className="text-xl font-bold mb-4">
              {t('Add your Items')}
            </h2>

            {error2 && (
              <p className="text-red-500 text-sm mb-2">{error2}</p>
            )}

            <form onSubmit={handleItemSubmit}>

              <input
                type="text"
                placeholder="Item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
              />

              <input
                type="number"
                step="0.01"
                min="0.01"
                placeholder="Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
              />

              <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">

                <button
                  type="button"
                  onClick={() => setShowModal2(false)}
                  className="text-sm text-gray-600 hover:underline"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-amber-950 px-5 py-2 text-white rounded-xl font-semibold"
                >
                  Add
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </>
  );
};

export default Header;
