import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import React from "react";
import Google from "../icon/google";
import Logo from "../icon/logo";
import X from "../icon/x";

const AuthPage = () => {
  return (
    <div className=" flex justify-center h-[calc(100vh_-_220px)] mx-auto ">
      <div className="flex justify-center flex-col gap-1 items-center w-full">
        <h2 className="text-lg">
          {/* <Link href="/">
            <Logo />
          </Link> */}
        </h2>
        <p className="text-2xl w-4/12">
          Great You are just one step away from accessing premium assets !
        </p>
        <div className="mt-10 flex gap-7">
          <RegisterLink
            authUrlParams={{
              connection_id: "conn_7cfefd2f49844de68f5891605b438957",
            }}
          >
            <button className="flex gap-2  w-32 items-center justify-center px-10 py-2 text-base font-medium  transition-all duration-200 bg-gray-100 border border-transparent rounded ">
              <Google />
            </button>
          </RegisterLink>

          <RegisterLink
            authUrlParams={{
              connection_id: "conn_844934f6325c4fada8ba2cc0b818d6fb",
            }}
          >
            <button className="flex gap-2  w-32 items-center justify-center px-10 py-2.5 text-base font-medium  transition-all duration-200 bg-gray-100 border border-transparent rounded ">
              <X />
            </button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
