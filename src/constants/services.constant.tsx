import { IconDatabase, IconDeviceSdCard, IconFingerprint, IconHeartHandshake, IconTruck } from "@tabler/icons-react"

export const SERVICES = [
	{
		id: "freight-forwarding",
		href: "/service/freight-forwarding",
		Icon: <IconDatabase />,
		background:
			"https://images.unsplash.com/photo-1593617761943-9099951a0769?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	},
	{
		id: "warehousing",
		href: "/service/warehousing",
		Icon: <IconDeviceSdCard />,
		background:
			"https://plus.unsplash.com/premium_photo-1733266897023-8ef16ad9350a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	},
	{
		id: "track-shipment",
		href: "/track-shipment",
		Icon: <IconTruck />,
		background:
			"https://images.unsplash.com/photo-1713859326033-f75e04439c3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	},
	{
		id: "customs-brokerage",
		href: "/service/customs-brokerage",
		Icon: <IconFingerprint />,
		background:
			"https://plus.unsplash.com/premium_photo-1682141618819-cc11059daf9a?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	},
	{
		id: "project-cargo",
		href: "/service/project-cargo",
		Icon: <IconHeartHandshake />,
		background:
			"https://images.unsplash.com/photo-1601912552080-0fb89fd08042?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
] as const
