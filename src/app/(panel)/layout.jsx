import PanelShell from "@/components/nav/PanelShell";

export const metadata = {
  title: "Dashboard - EduPulse",
};

export default function PanelLayout({ children }) {
  return <PanelShell>{children}</PanelShell>;
}
