interface Props {
  condition: Boolean;
  wrapper: (elem: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

export const ConditionalWrapper = ({ condition, wrapper, children }: Props) =>
  condition ? wrapper(children) : children;
