function Home() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-32">Sharefiles</h1>
      <h3 className="text-center text-2xl">
        - Effortless File Sharing for Everyone
      </h3>
      <div className="mt-12 w-11/12 md:w-3/4 lg:w-2/5 mx-auto text-xl">
        <p className="text-center">
          Welcome to ShareFiles, your go-to web app for file sharing. Whether
          you need to send important documents, share high-resolution images, or
          collaborate on large projects, ShareFiles makes it fast, easy, and
          worry-free. No more complicated setups or size limitations—just
          simple, intuitive file sharing at your fingertips.
        </p>
      </div>
      <div className="w-11/12 md:w-3/4 lg:w-2/5 mx-auto mt-12">
        <ul className="list-disc">
          <li className="my-4">
            <b>User-Friendly Interface</b>: Share files with just a few clicks.
            No tech skills required.
          </li>
          <li className="my-4">
            <b>Safe and easy</b> signing up.
          </li>
          <li className="my-4">
            <b>Lightning Fast</b>: Experience rapid uploads and downloads,
            regardless of file size.
          </li>
          <li className="my-4">
            <b>Cross-Platform</b>: Compatible with all devices and operating
            systems. Share files anytime, anywhere.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
