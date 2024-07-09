import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "../components/pageHeader/PageHeader";
import { TabProvider } from "@/contexts/TabContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { CarsProvider } from "@/contexts/CarsContext";
import { ModelsProvider } from "@/contexts/ModelsContext";
import { BrandsProvider } from "@/contexts/BrandsContext";
import { DialogsProvider } from "@/contexts/DialogsContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DialogsProvider>
      <CarsProvider>
        <ModelsProvider>
          <BrandsProvider>
            <TabProvider>
              <SearchProvider>
                <html lang="en">
                  <body className={inter.className} suppressHydrationWarning={true}>
                    <PageHeader />
                    {children}
                  </body>
                </html>
              </SearchProvider>
            </TabProvider>
          </BrandsProvider>
        </ModelsProvider>
      </CarsProvider>
    </DialogsProvider>
  );
}
