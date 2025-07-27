import Navbar from "@/components/root/navbar";

export default function LanderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center px-5 md:px-10 lg:px-20">
        <div className="container mt-30">{children}</div>
      </main>
    </>
  );
}
