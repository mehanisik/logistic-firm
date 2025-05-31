import {
  IconDatabase,
  IconDeviceSdCard,
  IconFingerprint,
} from "@tabler/icons-react";

export const FEATURE_ACCORDION_ITEMS = [
  {
    id: "international-logistics",
    icon: <IconDatabase />,
    imageUrl: "/images/accordion-1.jpg",
  },
  {
    id: "truck-transportation",
    icon: <IconFingerprint />,
    imageUrl: "/images/accordion-2.jpg",
  },
  {
    id: "distribution",
    icon: <IconDeviceSdCard />,
    imageUrl: "/images/accordion-3.jpg",
  },
] as const;
