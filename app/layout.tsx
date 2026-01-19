import "./globals.css";

export const metadata = {
  title: "Baires 23.1",
  description: "Cocina, ambiente y experiencia nocturna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
