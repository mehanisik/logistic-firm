"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Logo } from "@/components/ui/logo";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Link } from "@/i18n/navigation";
import NextLink from "next/link";
import { type MouseEvent, useRef, useState } from "react";

interface NavLinkItem {
	href: string;
	label: string;
}

interface SocialLinkItem {
	Icon: React.ElementType;
	href: string;
	label: string;
	tooltip: string;
}

export default function Footer() {
	const t = useTranslations("Footer");
	type DialogType = "privacy" | "terms";
	const [dialog, setDialog] = useState<DialogType>("privacy");
	const [openDialog, setOpenDialog] = useState(false);
	const { theme } = useTheme();
	const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
	const footerRef = useRef<HTMLDivElement>(null);
	const currentYear = new Date().getFullYear();

	const footerNavLinks: NavLinkItem[] = [
		{ href: "/", label: t("nav.home") },
		{ href: "/about-us", label: t("nav.about") },
		{ href: "/services", label: t("nav.services") },
		{ href: "/contact-us", label: t("nav.contact") },
	];

	const legalNavLinks: NavLinkItem[] = [
		{ href: "/privacy-policy", label: t("legal.privacy") },
		{ href: "/terms-of-service", label: t("legal.terms") },
	];

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

	const handleDialogOpen = (type: DialogType) => {
		setDialog(type);
		setOpenDialog(true);
	};

	const handleDialogClose = () => {
		setOpenDialog(false);
	};

	const socialLinks: SocialLinkItem[] = [
		{
			Icon: IconBrandLinkedin,
			href: "https://www.linkedin.com/in/mehmet-akkaya-86539555",
			label: "LinkedIn",
			tooltip: t("social.linkedin"),
		},
	];

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!footerRef.current) return;

		requestAnimationFrame(() => {
			const rect = footerRef.current?.getBoundingClientRect();
			if (!rect) return;

			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			if (!cursor || Math.abs(cursor.x - x) > 5 || Math.abs(cursor.y - y) > 5) {
				setCursor({ x, y });
			}
		});
	};

	const handleMouseLeave = () => {
		setTimeout(() => {
			setCursor(null);
		}, 100);
	};

	return (
		<footer
			ref={footerRef}
			className="relative border-t bg-background text-foreground transition-colors duration-300 overflow-hidden"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{cursor && (
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 z-0"
					style={{
						willChange: "transform",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: cursor.x,
							top: cursor.y,
							width: 240,
							height: 240,
							transform: "translate(-50%, -50%)",
							borderRadius: "50%",
							background:
								theme === "dark"
									? "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
									: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)",
							filter: "blur(24px)",
							mixBlendMode: theme === "dark" ? "lighten" : "multiply",
							pointerEvents: "none",
							transition: "all 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
							opacity: 0.8,
						}}
					/>
				</div>
			)}
			<div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-12">
					<div className="lg:col-span-4 flex flex-col items-start justify-start">
						<Logo
							isScrolled={true}
							className="w-[120px] sm:w-[150px] h-auto"
							withLink={false}
						/>

						<p className="mb-4 sm:mb-6 text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed">
							{t("newsletterDescription")}
						</p>
					</div>

					<div className="lg:col-span-2 md:justify-self-end">
						<h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-foreground">
							{t("quickLinks")}
						</h3>
						<nav className="space-y-2 sm:space-y-2.5">
							<Link
								href="/"
								className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
							>
								{t("nav.home")}
							</Link>
						</nav>
					</div>

					<div className="lg:col-span-3 md:justify-self-end">
						<h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-foreground">
							{t("contactTitle")}
						</h3>
						<address className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm not-italic text-muted-foreground">
							<p>{t("address")}</p>
							<p>
								<NextLink
									href="tel:+15555644784"
									className="hover:text-primary transition-colors duration-200"
								>
									{t("phoneLabel")}
								</NextLink>
							</p>
							<p>
								<NextLink
									href="mailto:inquiries@atiklogistics.com"
									className="hover:text-primary transition-colors duration-200"
								>
									{t("emailLabel")}
								</NextLink>
							</p>
						</address>
					</div>

					<div className="lg:col-span-3 md:justify-self-end">
						<h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-foreground">
							{t("followUs")}
						</h3>
						<p className="text-xs sm:text-sm text-muted-foreground">
							{t("newsletterDescription")}
						</p>
						<div className="mt-3 sm:mt-4 flex items-center gap-2">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<NextLink
											href="https://www.linkedin.com/in/mehmet-akkaya-86539555"
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-primary transition-colors duration-200"
											aria-label={t("social.linkedin")}
										>
											<IconBrandLinkedin
												className="h-5 w-5 sm:h-6 sm:w-6"
												aria-hidden="true"
											/>
											<span className="sr-only">{t("social.linkedin")}</span>
										</NextLink>
									</TooltipTrigger>
									<TooltipContent side="top">
										{t("social.linkedin")}
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					</div>
				</div>

				<div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-border pt-6 sm:pt-8 text-center md:flex-row">
					<p className="text-[10px] sm:text-xs text-muted-foreground">
						{t("copyright", { year: currentYear })}
					</p>
					<nav className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-[10px] sm:text-xs">
						{legalNavLinks.map((link) => (
							<Dialog
								key={link.label}
								open={openDialog}
								onOpenChange={setOpenDialog}
							>
								<DialogTrigger asChild>
									<button
										type="button"
										onClick={() =>
											handleDialogOpen(
												link.href.includes("privacy") ? "privacy" : "terms",
											)
										}
										className="text-muted-foreground hover:text-primary transition-colors duration-200"
									>
										{link.label}
									</button>
								</DialogTrigger>
								<DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
									<DialogHeader>
										<DialogTitle className="text-xl font-semibold mb-4">
											{dialogContent[dialog].title}
										</DialogTitle>
										<DialogDescription className="text-base leading-relaxed space-y-4">
											<p className="whitespace-pre-line">
												{dialogContent[dialog].description}
											</p>
										</DialogDescription>
									</DialogHeader>
									<Button
										type="button"
										onClick={handleDialogClose}
										className="w-full sm:w-auto"
									>
										{t("legal.accept")}
									</Button>
								</DialogContent>
							</Dialog>
						))}
						<NextLink
							href="https://mehanisik.is-a.dev/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors duration-200 opacity-60 hover:opacity-100"
						>
							Developed by Mehanisik
						</NextLink>
					</nav>
				</div>
			</div>
		</footer>
	);
}
