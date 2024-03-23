import ClientOnly from "@/app/components/ClientOnly";
import ToasterProvider from "@/app/components/providers/ToasterProvider";
import "@radix-ui/themes/styles.css";
import { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "Meetlily Dashboard",
  description: "Simplify Data Management",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
                ${font.className}
              bg-gray-100 dark:bg-gray-800
            `}
      >
        <ClientOnly>
          <ToasterProvider />

          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
