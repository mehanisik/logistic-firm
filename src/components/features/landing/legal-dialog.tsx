"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

interface LegalDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	type: "privacy" | "terms";
}

export default function LegalDialog({
	open,
	onOpenChange,
	type,
}: LegalDialogProps) {
	const t = useTranslations("Footer");

	const dialogContent = {
		privacy: {
			title: t("legal.privacyTitle"),
			description: t("legal.privacyDescription"),
		},
		terms: {
			title: t("legal.termsTitle"),
			description: t("legal.termsDescription"),
		},
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold mb-4">
						{dialogContent[type].title}
					</DialogTitle>
					<DialogDescription className="text-base leading-relaxed space-y-4">
						<p className="whitespace-pre-line">
							{dialogContent[type].description}
						</p>
					</DialogDescription>
				</DialogHeader>
				<Button
					type="button"
					onClick={() => onOpenChange(false)}
					className="w-full sm:w-auto"
				>
					{t("legal.accept")}
				</Button>
			</DialogContent>
		</Dialog>
	);
}
