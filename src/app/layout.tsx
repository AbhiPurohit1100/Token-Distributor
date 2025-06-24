import { ReactNode } from "react";
import { Providers } from "./providers";
import "./globals.css"
import "@/components/ui/InputFeilds"
import { Home } from "@/components/header";
import TTokenSender from "@/components/ui/InputFeilds";
export default function RootLayout(props: {children : ReactNode}){
  return (
    <html lang="en">
      <body className="bg-gradient-animated">
        <Providers>
          <Home />
          <TTokenSender></TTokenSender>
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
