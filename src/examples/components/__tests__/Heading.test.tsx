import { render } from '@testing-library/react';
import Heading, { TUser } from '../Heading';

describe('<Heading />', () => {
  describe('#render', () => {
    const user: TUser = {
      name: 'foobar',
    };
    it('should render component with default props', () => {
      const { container } = render(<Heading user={user}>text</Heading>);

      expect(container).toMatchSnapshot();
    });

    it('should render component with title', () => {
      const { container } = render(
        <Heading user={user} title="bar">
          text
        </Heading>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
