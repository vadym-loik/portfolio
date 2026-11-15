import "../globals.css";

/** Layout of "/" only: this page sends the visitor to /en or /fr */
export default function RootRedirectLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
