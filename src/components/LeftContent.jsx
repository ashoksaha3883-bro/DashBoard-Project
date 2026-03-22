
import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import AnalyticsSection from './AnalyticsSection';

const LeftContent = ({ items }) => {
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState('name');

  const itemsWithDates = useMemo(() => {
    return items.map(item => {
      if (item.date) return item;

      const randomDaysAgo = Math.floor(Math.random() * 30);
      const date = new Date();
      date.setDate(date.getDate() - randomDaysAgo);

      return { ...item, date: date.toISOString() };
    });
  }, [items]);

  const totalItems = items.length;

  const totalValue = items
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);

  const avgPrice =
    totalItems > 0 ? (totalValue / totalItems).toFixed(2) : '0.00';

  const maxPrice =
    totalItems > 0 ? Math.max(...items.map(item => item.price)) : 1;

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return a.price - b.price;
  });

  const getPriceColor = (price) => {
    const ratio = price / maxPrice;

    if (ratio < 0.33) return 'bg-green-500';
    if (ratio < 0.66) return 'bg-yellow-500';

    return 'bg-red-500';
  };

  const getBadge = () => {
    if (totalItems === 0) return null;

    if (totalItems >= 10)
      return { emoji: '🥇', text: t('goldTier'), next: null };

    if (totalItems >= 5)
      return {
        emoji: '🥈',
        text: t('silverTier'),
        next: 10 - totalItems,
      };

    return {
      emoji: '🥉',
      text: t('bronzeTier'),
      next: 5 - totalItems,
    };
  };

  const badge = getBadge();

  return (
    <>
      {/*  header */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 px-4 sm:px-6 lg:px-10 gap-2">

        <p className="text-gray-600">{t('overview')}</p>

        <p className="text-gray-500 text-sm">
          {t('lastUpdated')} {new Date().toLocaleDateString()}
        </p>

      </div>

      {/* Stats cards */}

      {totalItems > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-4 sm:px-6 lg:px-10">

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{t('totalItems')}</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">
              {totalItems}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{t('totalValue')}</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">
              {totalValue}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{t('averagePrice')}</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">
              {avgPrice}
            </p>
          </div>

        </div>
      )}

      {/* Main Layout */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-4 sm:px-6 lg:px-10">

        {/* Left  */}

        <div>

          <h1 className="font-semibold text-2xl sm:text-3xl mb-4">
            {t('dashboard')}
          </h1>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">

            <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-yellow-500 rounded-full"></span>
              {t('achievementBadges')}
            </h3>

            {badge ? (

              <div className="text-center py-2">

                <div className="text-5xl sm:text-6xl mb-2">
                  {badge.emoji}
                </div>

                <p className="text-lg font-semibold text-gray-800">
                  {badge.text}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {totalItems} {t('itemsAdded')}
                </p>

                {badge.next && (
                  <p className="text-xs text-blue-600 mt-3">
                    {t('nextMilestone', { count: badge.next })}
                  </p>
                )}

              </div>

            ) : (

              <p className="text-gray-400 text-sm py-6 text-center">
                {t('addFirstItemBadge')}
              </p>

            )}

            <button className="mt-3 w-full text-sm text-blue-600 hover:text-blue-800 font-medium transition">
              {t('viewAllItems')}
            </button>

          </div>

        </div>

        {/* Right  */}

        <div>

          <h5 className="mt-4 font-semibold text-left lg:text-right text-gray-500">
            {t('allItems')}
          </h5>

          <div className="mt-2 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">

              <h2 className="text-lg font-semibold">
                {t('yourItems')}
              </h2>

              {totalItems > 0 && (
                <div className="flex gap-2 flex-wrap">

                  <button
                    onClick={() => setSortBy('name')}
                    className={`px-3 py-1 text-xs rounded-full transition ${
                      sortBy === 'name'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {t('byName')}
                  </button>

                  <button
                    onClick={() => setSortBy('price')}
                    className={`px-3 py-1 text-xs rounded-full transition ${
                      sortBy === 'price'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {t('byPrice')}
                  </button>

                </div>
              )}

            </div>

            {totalItems > 0 ? (

              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">

                {sortedItems.map((item, index) => {

                  const barWidth = (item.price / maxPrice) * 100;

                  const priceColor = getPriceColor(item.price);

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >

                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        {item.name.charAt(0).toUpperCase()}
                      </div>

                      <div className="flex-1 min-w-0">

                        <div className="flex justify-between items-center">

                          <p className="font-medium truncate">
                            {item.name}
                          </p>

                          <span className="text-sm font-semibold text-gray-700">
                            ${item.price.toFixed(2)}
                          </span>

                        </div>

                        <div className="flex items-center gap-2 mt-1">

                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">

                            <div
                              className={`h-full ${priceColor} rounded-full transition-all duration-500 ease-out`}
                              style={{ width: `${barWidth}%` }}
                            />

                          </div>

                          <span className="text-xs text-gray-500 w-12">
                            {Math.round(barWidth)}%
                          </span>

                        </div>

                      </div>

                    </div>
                  );

                })}

              </div>

            ) : (

              <div className="text-center py-10 text-gray-500">

                {t('noItemsYet')}{' '}

                <span className="font-semibold">
                  {t('createWorkspaceLink')}
                </span>{' '}

                {t('toAddFirst')}

              </div>

            )}

          </div>

        </div>

      </div>

      {/* Analytics Section */}

      <AnalyticsSection
        items={itemsWithDates}
        maxPrice={maxPrice}
        getPriceColor={getPriceColor}
      />

    </>
  );
};

export default LeftContent;

