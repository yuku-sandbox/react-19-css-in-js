import { styled } from "../../functions/styled1";

export default function Home() {
  const Div = styled("div", {
    backgroundColor: "lightgray",
    color: "red",
  });

  return (
    <div>
      <Div>aaa</Div>
      <Div>aaa</Div>
      <Div>aaa</Div>
      <Div>aaa</Div>
      <Div>aaa</Div>
    </div>
  );
}
