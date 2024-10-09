import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
type ProvidersType = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersType) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
