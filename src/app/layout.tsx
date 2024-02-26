import "./globals.css";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export const metadata = {
  title: "Kinde Auth",
  description: "Kinde with NextJS App Router",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://widgets.kinde.com/v1/css/subscribe.css"
        ></link>
      </head>
      <body>
        <header>
          <nav className="nav container ">
            <a href="/">
              <h1 className="text-display-3">
                <img className="w-32" src="/logo.svg" alt="logo" />
              </h1>
            </a>
            <div>
              {!(await isAuthenticated()) ? (
                <>
                  {/* <LoginLink className="btn btn-ghost sign-in-btn">
                    Sign in
                  </LoginLink>
                  <RegisterLink className="btn btn-dark">Sign up</RegisterLink> */}
                </>
              ) : (
                <div className="profile-blob">
                  {user?.picture ? (
                    <img
                      className="avatar"
                      src={user?.picture}
                      alt="user profile avatar"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="avatar">
                      {user?.given_name?.[0]}
                      {user?.family_name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-heading-2">
                      {user?.given_name} {user?.family_name}
                    </p>

                    <LogoutLink className="text-subtle">Log out</LogoutLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container flex flex-col text-center">
            <strong className="text-heading-2">
              <a
                className="cursor-pointer text-blue-600 underline"
                href="www.setoo.co"
              >
                www.setoo.co
              </a>
            </strong>

            <small className="text-subtle">
              © 2024 Setoo Solutions All rights reserved
            </small>
          </div>
        </footer>
        <script
          src="https://widgets.kinde.com/v1/js/subscribe.js"
          async
        ></script>
      </body>
    </html>
  );
}
