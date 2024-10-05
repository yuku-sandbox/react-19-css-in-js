import { PropsWithChildren } from "react";
import { styled } from "../../functions/styled2";

export default function Home() {
  return (
    <div>
      <ColorBox backgroundColor="lightgray">aaa</ColorBox>
      <ColorBox backgroundColor="black">aaa</ColorBox>
      <ColorBox backgroundColor="blue">aaa</ColorBox>
    </div>
  );
}

function ColorBox(props: PropsWithChildren<{ backgroundColor: string }>) {
  const Div = styled("div", {
    backgroundColor: props.backgroundColor,
    color: "red",
  });

  return <Div>{props.children}</Div>;
}
