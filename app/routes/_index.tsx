import type { V2_MetaFunction } from "@remix-run/react";
import Balancer from "react-wrap-balancer";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div
      className={
        "font-sans max-w-md mx-auto flex flex-col gap-8 m-8 border border-gray-300 rounded-lg p-8 "
      }
    >
      <h1 className={"font-bold text-[20px] border border-red-300"}>
        <Balancer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Balancer>
      </h1>

      <h1 className={"font-bold text-[20px] border border-blue-300"}>
        <Balancer>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur
        </Balancer>
      </h1>
    </div>
  );
}
