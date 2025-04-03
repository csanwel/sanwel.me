import { HSLtoRGB } from "./_component/HSLtoRGB";
import { UUIDGenerator } from "./_component/UUIDGenerator";

function DevToolPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-xl">Dev Tools</h1>

      <UUIDGenerator />
      <HSLtoRGB />
    </div>
  );
}

export default DevToolPage;
