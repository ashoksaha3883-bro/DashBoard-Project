
import React, { useMemo } from 'react';
import { useLanguage } from './LanguageContext';

const AnalyticsSection = ({ items, maxPrice, getPriceColor }) => {
  const { t } = useLanguage();
  const totalItems = items.length;

  if (totalItems === 0) return null;

  const priceRanges = [
    { min: 0, max: 50, label: '$0–$50' },
    { min: 50, max: 100, label: '$50–$100' },
    { min: 100, max: 200, label: '$100–$200' },
    { min: 200, max: Infinity, label: '$200+' },
  ];

  const rangeData = useMemo(() => {
    return priceRanges.map(range => {
      const count = items.filter(
        item => item.price >= range.min && item.price < range.max
      ).length;
      return { ...range, count };
    });
  }, [items]);

  const monthlyData = useMemo(() => {
    const now = new Date();
    const months = [];

    for (let i = 0; i < 3; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);

      const monthKey = `${d.getFullYear()}-${String(
        d.getMonth() + 1
      ).padStart(2, '0')}`;

      const monthName = d.toLocaleString('default', {
        month: 'short',
        year: 'numeric',
      });

      months.push({
        key: monthKey,
        name: monthName,
        items: [],
        total: 0,
      });
    }

    items.forEach(item => {
      const itemDate = new Date(item.date);

      const itemMonthKey = `${itemDate.getFullYear()}-${String(
        itemDate.getMonth() + 1
      ).padStart(2, '0')}`;

      const monthEntry = months.find(m => m.key === itemMonthKey);

      if (monthEntry) {
        monthEntry.items.push(item);
        monthEntry.total += item.price;
      }
    });

    const totalCountLast3Months = months.reduce(
      (acc, m) => acc + m.items.length,
      0
    );

    return months.map(m => ({
      ...m,
      count: m.items.length,
      totalFormatted: m.total.toFixed(2),
      percentage:
        totalCountLast3Months > 0
          ? (m.items.length / totalCountLast3Months) * 100
          : 0,
    }));
  }, [items]);

  const calendarData = useMemo(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      hasActivity: false,
    }));

    items.forEach(item => {
      const itemDate = new Date(item.date);

      if (
        itemDate.getFullYear() === year &&
        itemDate.getMonth() === month
      ) {
        const day = itemDate.getDate();
        const dayEntry = days.find(d => d.day === day);

        if (dayEntry) dayEntry.hasActivity = true;
      }
    });

    return { year, month: month + 1, days, startOffset };
  }, [items]);

  const renderCalendar = () => {
    const { days, startOffset } = calendarData;

    const totalCells = Math.ceil((startOffset + days.length) / 7) * 7;

    const cells = [];

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - startOffset + 1;

      const dayInfo = days.find(d => d.day === dayNumber);

      const hasActivity = dayInfo?.hasActivity || false;

      const isCurrentDay = dayNumber === new Date().getDate();

      const isValidDay = dayNumber > 0 && dayNumber <= days.length;

      cells.push(
        <div
          key={i}
          className={`flex items-center justify-center text-xs sm:text-sm rounded-full transition-colors
          w-8 h-8 sm:w-10 sm:h-10
          ${
            isValidDay
              ? hasActivity
                ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              : 'bg-transparent'
          }
          ${isCurrentDay ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
        `}
          title={
            isValidDay
              ? `${dayNumber} ${
                  hasActivity ? `· ${t('itemAdded')}` : ''
                }`
              : ''
          }
        >
          {isValidDay ? dayNumber : ''}
        </div>
      );
    }

    return (
      <>
        <div className="grid grid-cols-7 gap-1 mt-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div
              key={day}
              className="text-[10px] sm:text-xs font-medium text-gray-400 text-center"
            >
              {day}
            </div>
          ))}
          {cells}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-4 mt-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-50 rounded-full border border-gray-200"></span>
            {t('noActivity')}
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-100 rounded-full border border-blue-200"></span>
            {t('itemAdded')}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 mt-6 sm:mt-8">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        {t('analytics')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

      
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
            {t('monthlyDistribution')}
          </h3>

          <div className="space-y-4">

            <div className="h-8 sm:h-10 w-full bg-gray-100 rounded-full flex overflow-hidden">
              {monthlyData.map((month, idx) => (
                <div
                  key={month.key}
                  className={`h-full flex items-center justify-center text-[10px] sm:text-xs font-medium text-white transition-all duration-300 hover:brightness-110
                  ${
                    idx === 0
                      ? 'bg-blue-500'
                      : idx === 1
                      ? 'bg-indigo-500'
                      : 'bg-purple-500'
                  }`}
                  style={{ width: `${month.percentage}%` }}
                  title={`${month.name}: ${month.count} ${t(
                    'items'
                  )} ($${month.totalFormatted})`}
                >
                  {month.percentage > 10
                    ? month.name.split(' ')[0]
                    : ''}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] sm:text-xs">
              {monthlyData.map((month, idx) => (
                <div key={month.key} className="text-center">
                  <div
                    className={`font-semibold ${
                      idx === 0
                        ? 'text-blue-600'
                        : idx === 1
                        ? 'text-indigo-600'
                        : 'text-purple-600'
                    }`}
                  >
                    {month.name}
                  </div>

                  <div className="text-gray-600">
                    {month.count} {t('items')}
                  </div>

                  <div className="text-gray-500">
                    ${month.totalFormatted}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>


        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">

          <h3 className="font-medium text-gray-700 mb-1 flex items-center gap-2">
            <span className="w-1 h-4 bg-green-500 rounded-full"></span>
            {new Date().toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h3>

          <p className="text-xs text-gray-400 mb-2">
            {t('activityCalendar')}
          </p>

          {renderCalendar()}

        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;

