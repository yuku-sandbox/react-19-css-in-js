import { ComponentProps, CSSProperties, ElementType } from "react";
import fnv1a from "@sindresorhus/fnv1a";

export function styled<C extends ElementType<{ className?: string }>>(
  Component: C,
  props: CSSProperties
) {
  const [className, sheet] = generateSheet(props);

  return (props: ComponentProps<C>) => {
    return (
      <>
        <style href={className} precedence="medium">
          {sheet}
        </style>
        {/* @ts-expect-error */}
        <Component {...props} className={className} />
      </>
    );
  };
}

function generateSheet(props: CSSProperties) {
  const entries: string[] = [];

  for (const [key, value] of Object.entries(props)) {
    if (value) {
      const kebab = toKebabCase(key);
      entries.push(`${kebab}: ${value};`);
    }
  }

  const styles = entries.join("\n");
  const hash = fnv1a(styles, { size: 32 }).toString(36).slice(0, 4);
  const className = `x${hash}`;

  return [className, `.${className} { ${styles} }`] as const;
}
function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
