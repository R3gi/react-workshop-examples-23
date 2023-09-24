import { ComponentType } from 'react';

interface VisibilityProps {
  isVisible?: boolean;
}
/**
 * HOC that adds an `isVisible` prop that stops a component from rendering if
 * `isVisible===false`
 * @param WrappedComponent component to be selectively hidden
 * @returns null if `isVisible` is false
 */
export const withVisibility = <P = {},>(WrappedComponent: ComponentType<P>): ComponentType<P & VisibilityProps> => {
  const VisibilityControlled = (props: P & VisibilityProps) => {
    if (props.isVisible === false) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return VisibilityControlled;
};
