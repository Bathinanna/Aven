'use client';

import dynamic from 'next/dynamic';

// Import VapiWidget dynamically to avoid client-side issues
const VapiWidget = dynamic(
  () => import("@/components/VapiAssistant"),
  { ssr: false }
);

export default function VapiWidgetWrapper({ 
  apiKey, 
  assistantId 
}: { 
  apiKey: string, 
  assistantId: string 
}) {
  return (
    <VapiWidget
      apiKey={apiKey}
      assistantId={assistantId}
    />
  );
}
