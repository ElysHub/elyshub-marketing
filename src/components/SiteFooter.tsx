export default function SiteFooter() {
  return (
    <footer className="mx-auto mt-32 w-full max-w-5xl border-t border-elys-border px-6 pb-16 pt-10">
      <div className="flex flex-col items-center justify-between gap-6 text-sm text-elys-muted md:flex-row">
        <div>
          Contact:{" "}
          <a
            href="mailto:elyshub.team@gmail.com"
            className="transition hover:text-elys-text"
          >
            elyshub.team@gmail.com
          </a>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61585837850448"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-elys-text"
          >
            Facebook
          </a>

          <a
            href="https://www.linkedin.com/company/elyshub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-elys-text"
          >
            LinkedIn
          </a>

          <a
            href="https://www.reddit.com/user/Far-Plant-9223/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-elys-text"
          >
            Reddit
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-elys-muted">
        © {new Date().getFullYear()} ElysHub, LLC. All rights reserved.
      </p>
    </footer>
  );
}
