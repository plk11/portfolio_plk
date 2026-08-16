import { SocialLinks } from "@/components/common/SocialLinks";
import { personalInfo, socialLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-foreground">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{personalInfo.heroHeadline}</p>
        </div>

        <SocialLinks links={socialLinks} />
      </div>

      <div className="border-t border-border">
        <div className="section-container py-6 text-center text-sm text-muted-foreground sm:text-left">
          <p>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
