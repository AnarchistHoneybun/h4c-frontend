import TabSwitcher from "@/components/TabSwitcher";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TabSwitcher className="mb-4" />
      <div className="min-h-[75vh]">{children}</div>
      <Footer />
    </div>
  );
}
