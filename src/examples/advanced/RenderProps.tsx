import React, { useState } from 'react';
import { useEffect } from 'react';
import { ReactNode } from 'react';

type Items = { objectID: string; title: string }[];

const Table: React.FC<{ items: Items }> = ({ items }) => (
  <table>
    <tbody>
      {items.map(item => (
        <tr key={item.objectID}>
          <td>{item.objectID}</td>
          <td>{item.title}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Grid: React.FC<{ items: Items }> = ({ items }) => (
  <div className="row">
    {items.map(item => (
      <div className="col" key={item.objectID}>
        <span>{item.objectID}</span>
        <span>{item.title}</span>
      </div>
    ))}
  </div>
);

const RenderProps: React.FC<{ render: { (items: Items): ReactNode }; title: string }> = ({ render, title }) => {
  const [items, setItems] = useState<Items>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://hn.algolia.com/api/v1/search?query=redux');
      const data = await response.json();

      setItems(data.hits);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Render Props {title}</h2>
      {render(items)}
    </>
  );
};

export const ItemsTable: React.FC = () => <RenderProps title="Table" render={items => <Table items={items} />} />;

export const ItemsGrid: React.FC = () => <RenderProps title="Grid" render={items => <Grid items={items} />} />;
