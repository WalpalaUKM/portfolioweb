import { MapPin } from "lucide-react";
import { SubPage } from "./SubPage";

const items = [
  { title: "Sri Lanka Telecom Data Center Visit", meta: "2024", description: "Toured the core data center facilities — observed cooling systems, redundancy, and network operations at scale.", tags: ["Networking", "Infrastructure"] },
  { title: "Lanka Electricity Co. Substation", meta: "2024", description: "Hands-on exposure to high-voltage transmission, SCADA systems and load management practices.", tags: ["Power Systems", "SCADA"] },
  { title: "Dialog Innovation Lab", meta: "2023", description: "Explored 5G testbeds, IoT prototypes and the engineering culture inside a leading telecom operator.", tags: ["IoT", "5G"] },
  { title: "Industrial Automation Plant", meta: "2023", description: "Studied PLC-driven assembly lines and how robotics integrates with traditional manufacturing.", tags: ["Automation", "Robotics"] },
];

const FieldVisits = () => (
  <SubPage eyebrow="Industry Exposure" title="Field Visits" subtitle="Real-world site visits that brought theory to life." icon={MapPin} items={items} />
);
export default FieldVisits;
