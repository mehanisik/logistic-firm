import { IconDatabase, IconDeviceSdCard, IconFingerprint, IconHeartHandshake, IconTruck } from "@tabler/icons-react"

export const SERVICES = [
	{
		id: "freight-forwarding",
		href: "/service/freight-forwarding",
		Icon: <IconDatabase />,
		background: "/images/services-1.jpg",
		className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
	},
	{
		id: "warehousing",
		href: "/service/warehousing",
		Icon: <IconDeviceSdCard />,
		background: "/images/services-2.jpg",
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	},
	{
		id: "track-shipment",
		href: "/track-shipment",
		Icon: <IconTruck />,
		background: "/images/services-3.jpg",
		className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
	},
	{
		id: "customs-brokerage",
		href: "/service/customs-brokerage",
		Icon: <IconFingerprint />,
		background: "/images/services-4.jpg",
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	},
	{
		id: "project-cargo",
		href: "/service/project-cargo",
		Icon: <IconHeartHandshake />,
		background: "/images/services-5.jpg",
		className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	},
] as const
