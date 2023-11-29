import { Dispatch, FC, SetStateAction, useEffect } from 'react';

export const KEYS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};

export const ResultList: FC<{
  items: { id: number; title: string }[];
  activeItem: number;
  setActiveItem: Dispatch<SetStateAction<number>>;
  handleBlur: () => void;
  handleFocus: () => void;
}> = ({ items, activeItem, setActiveItem, handleBlur, handleFocus }) => {
  useEffect(() => {
    const handleKeys = (event: KeyboardEvent) => {
      const { key } = event;

      switch (key) {
        case KEYS.UP: {
          event.preventDefault();
          if (activeItem === 0) {
            return;
          }
          if (activeItem === 1) {
            handleFocus();
          }

          setActiveItem((prevActiveItem: number) => prevActiveItem - 1);
          break;
        }

        case KEYS.DOWN:
          event.preventDefault();
          if (activeItem === items.length) {
            return;
          }

          if (activeItem === 0) {
            handleBlur();
          }

          setActiveItem(prevActiveItem => prevActiveItem + 1);
          break;

        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeys);

    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
  }, [activeItem, handleBlur, handleFocus, items.length, setActiveItem]);

  return (
    <ul>
      {items.map(({ id, title }) => (
        <li className={id === activeItem ? 'is-selected' : ''} key={id}>
          {title}
        </li>
      ))}
    </ul>
  );
};
