import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: '5G Case – Mobiles Enterprise-Netzwerk kaufen | Comms Connect',
  description:
    'Das portable 5G-Koffersystem für Baustellen, Events und Notfälle. Plug & Play in unter 60 Sekunden. CE & IP67 zertifiziert. Jetzt kaufen.',
  keywords: [
    '5G Koffer kaufen',
    'mobiles 5G Internet',
    'Baustelle WLAN',
    'portable 5G Router',
    'Enterprise Konnektivität',
  ],
  openGraph: {
    title: 'Kein Netz? Unser Problem. | 5G Case by Comms Connect',
    description: 'Portable 5G-Konnektivität überall. In unter 60 Sekunden online.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-bg text-white font-body antialiased">{children}</body>
    </html>
  );
}
