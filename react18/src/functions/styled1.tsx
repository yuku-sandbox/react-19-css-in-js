import { ComponentProps, CSSProperties, ElementType } from "react";

export function styled<C extends ElementType<{ style?: CSSProperties }>>(
  Component: C,
  style: CSSProperties
) {
  return (props: ComponentProps<C>) => {
    return (
      /* @ts-expect-error */
      <Component {...props} style={style} />
    );
  };
}
