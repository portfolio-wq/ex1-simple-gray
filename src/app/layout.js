import { Merienda } from "next/font/google";
import "./globals.css";

const merinda = Merienda({
  weight: ["400", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Nisrin",
  description: "Nisrin portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merinda.className}>{children}</body>
    </html>
  );
}
