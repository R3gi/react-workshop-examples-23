import { render, screen } from '@testing-library/react';
import { Deferred } from '../Deferred';

describe('<Deferred />', () => {
  describe('#render', () => {
    it('should render component with default props', () => {
      render(<Deferred name="bar111" />);

      // log entire document to testing-playground
      // eslint-disable-next-line testing-library/no-debugging-utils
      screen.logTestingPlaygroundURL();

      expect(screen.getAllByTestId('item')).toHaveLength(11);
    });
  });
});
