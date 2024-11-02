import React, { useState } from 'react';

const Insights = () => {
  const [insights, setInsights] = useState([
    { title: 'Insight 1', source: 'Source 1', date: '2023-01-01' },
    { title: 'Insight 2', source: 'Source 2', date: '2023-01-02' },
    { title: 'Insight 3', source: 'Source 3', date: '2023-01-03' },
  ]);

  const addInsight = () => {
    const newInsight = { title: 'New Insight', source: 'New Source', date: '2023-01-04' };
    setInsights([...insights, newInsight]);
  };

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-primary text-white rounded"
        onClick={addInsight}
      >
        Create
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Source</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {insights.map((insight, index) => (
            <tr key={index}>
              <td className="py-2">{insight.title}</td>
              <td className="py-2">{insight.source}</td>
              <td className="py-2">{insight.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Insights;
