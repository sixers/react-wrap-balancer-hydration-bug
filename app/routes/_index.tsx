import type { V2_MetaFunction } from "@remix-run/react";
import Balancer from "react-wrap-balancer";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "16px" }}>
        <Balancer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Balancer>
      </h1>
    </div>
  );
}
