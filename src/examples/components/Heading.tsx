import React, { FC, Fragment, ReactNode } from 'react';

export type TUser = {
  name: string;
};

interface HeadingProps {
  title?: string;
  children: ReactNode;
  user: TUser;
  button: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ title = 'foo', children, user: { name }, button }) => (
  <>
    <h1>{title}</h1>
    {children}
    <p>{name}</p>
    {button}
  </>
);

// const Heading = ({ title = 'foo', children }) => (
//   <div>
//     <h1>{title}</h1>
//     {children}
//   </div>
// );

// Heading.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };

// class Heading extends React.Component<{
//   title: string;
//   children: ReactNode;
// }> {
//   render() {
//     const { title, children } = this.props;

//     return (
//       <div>
//         <h1>{title}</h1>
//         {children}
//       </div>
//     );
//   }
// }
