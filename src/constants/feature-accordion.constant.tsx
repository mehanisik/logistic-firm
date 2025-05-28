import { IconDatabase, IconDeviceSdCard, IconFingerprint } from "@tabler/icons-react"

export const FEATURE_ACCORDION_ITEMS = [
	{
		id: "international-logistics",
		icon: <IconDatabase />,
		imageUrl:
			"https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: "truck-transportation",
		icon: <IconFingerprint />,
		imageUrl:
			"https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: "distribution",
		icon: <IconDeviceSdCard />,
		imageUrl:
			"https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?q=80&w=2137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
] as const
