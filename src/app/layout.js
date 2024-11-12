import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Auflo - Testing at the Speed of Thought",
  description: "Auflo is revolutionizing software testing by introducing the World's First Agentic AI system that autonomously handles the complete testing lifecycle. Unlike traditional automation tools or standalone AI solutions, Auflo's agents work collaboratively to understand, create, and execute tests while continuously learning and adapting.",
  // Application name
  applicationName: "Auflo",
  authors: [
    { name: "Auflo Team" },
  ],
  // Keywords for search engines
  keywords: [
    "AI Testing",
    "Software Testing",
    "Test Automation",
    "Agentic AI",
    "QA Automation",
    "Automated Testing",
    "DevOps",
    "Software Development",
    "Quality Assurance",
    "Testing Platform",
    "AI Testing Platform",
    "Test Case Generation",
    "Continuous Testing"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-18LLF5ZQX6" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
