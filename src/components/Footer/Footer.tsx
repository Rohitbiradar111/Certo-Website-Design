import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-4 py-16 sm:px-10 md:px-16 lg:px-40">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Scan. Detect. Remove.</h2>
            <img
              src="images/Image13.png"
              alt="Certo Social Media Accounts"
              className="w-full"
            />
            <div className="space-y-6">
              <div className="flex gap-6 flex-wrap">
                <Link href="/" className="text-xs underline">
                  Privacy Policy
                </Link>
                <Link href="/" className="text-xs underline">
                  Terms of Service
                </Link>
              </div>
              <p className="text-xs">
                Copyright &copy; 2022 Certo Software Limited | Registered in
                England & Wales No. 10072356
              </p>
              <p className="text-xs">Designed & developed by Bigger Picture</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6">Certo</h1>
              <hr className="h-0.5 bg-white w-48 border-none" />
            </div>

            <nav className="space-y-3">
              {["iPhone", "Android", "Help", "About", "Insights"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-4 h-0.5 bg-yellow-500 rounded-full" />
                    <Link
                      href="/"
                      className="text-lg font-bold text-yellow-500"
                    >
                      {item}
                    </Link>
                  </div>
                )
              )}
            </nav>
          </div>

          <div className="bg-yellow-500 w-full md:w-96 p-8 rounded-4xl text-black flex flex-col h-60">
            <h3 className="text-xl font-bold mb-4">
              Sign up to our newsletter
            </h3>
            <p className="text-sm mb-8">
              Receive the latest mobile security news, exclusive discounts &
              offers straight to your inbox!
            </p>
            <form className="flex bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-2 py-1 md:px-4 md:py-2 text-black placeholder-gray-500 focus:outline-none"
              />
              <button
                type="button"
                className="bg-blue-950 text-white px-2 md:px-4 text-sm font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="text-left text-xs">
          <p>
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
            registered in the U.S. and other
            <br /> countries. App Store is a service mark of Apple Inc. Android,
            Google Play and the Google Play
            <br /> logo are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
