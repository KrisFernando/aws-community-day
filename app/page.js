import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/aws-community-day.svg"
          alt="AWS Community Day"
          width={800}
          height={166}
          priority
        />
        <h1 className="text-4xl sm:text-6xl text-center sm:text-center">
          TUNISIA
        </h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/KrisFernando/aws-community-day/blob/main/.presentation/AWSCommunityDay-Tunisia-ContainersOnAWS.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Presentation"
            width={16}
            height={16}
          />
          Presentation
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/KrisFernando/aws-community-day"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          GitHub Repo
        </a>
      </footer>
    </div>
  );
}
