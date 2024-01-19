import * as Craft from "@/components/craft/layout";
import { ModeToggle } from "@/components/craft/theme/theme-toggle";

export default function Footer() {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex gap-4 flex-wrap justify-between">
          <p>
            Visit the{" "}
            <a
              className="cursor-pointer underline underline-offset-4 transition-all hover:opacity-50"
              href="https://github.com/9d8dev/craft"
            >
              Github Repo
            </a>{" "}
            here.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm">© Craft UI, 2023-Present</p>
            <ModeToggle />
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
