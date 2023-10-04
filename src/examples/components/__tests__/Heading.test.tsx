import { render } from '@testing-library/react';
import { Heading, TUser } from '../Heading';

describe('<Heading />', () => {
  describe('#render', () => {
    const user: TUser = {
      name: 'foobar',
    };
    it('should render component with default props', () => {
      const { container } = render(
        <Heading user={user} button={<button type="button">btn</button>}>
          text
        </Heading>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should render component with title', () => {
      const { container } = render(
        <Heading user={user} title="bar" button={<button type="button">btn</button>}>
          text
        </Heading>,
      );

      expect(container).toMatchSnapshot();
    });

    it.each([{ title: 'bar' }, { title: undefined }])('should render component with %s', ({ title }) => {
      const { container } = render(
        <Heading user={user} title={title} button={<button type="button">btn</button>}>
          text
        </Heading>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
