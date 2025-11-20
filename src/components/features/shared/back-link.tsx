import { IconArrowLeft } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function BackLink() {
	const t = useTranslations("Common");

	return (
		<div className="max-w-7xl mx-auto px-4">
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
			>
				<IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
				<span className="text-sm sm:text-base">
					{t("backToHome", { default: "Back to Home" })}
				</span>
			</Link>
		</div>
	);
}
