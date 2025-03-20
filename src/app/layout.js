
import { Providers } from "@/redux/providers";
import { MantineProvider } from "@mantine/core"; // Import MantineProvider
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from "@/components/layout/PageWrapper";
export const metadata = {
  title: "Welcome to Meta Saas  Admin Panel",
  description: "Meta Web API Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
       
      ><AnimatePresence mode="wait">
        {/* Wrap the children with MantineProvider */}
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Providers>
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
          <PageWrapper>
                {children}
              </PageWrapper></Providers>
        </MantineProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
