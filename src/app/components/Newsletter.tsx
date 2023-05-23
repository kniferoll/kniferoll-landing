import { SetStateAction, useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

function ThankYouMessage({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="grid grid-cols-4 mt-10 ">
      <div className="col-span-2 col-start-2 rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              Thank you for signing up! You’ll be the first to hear about what
              we’re building at KnifeRoll.
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                onClick={onDismiss}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowMessage(true);

    try {
      fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setEmail("");
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-gray-800 to-sky-800 to-90%  px-6 py-24 shadow-2xl rounded-xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get notified when we’re launching.
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
          We respect your inbox. Subscribers will be the first to gain exclusive
          access to our exciting beta launch and enjoy special perks designed
          just for them.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-md gap-x-4 relative"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Notify me
          </button>
        </form>
        {showMessage && (
          <ThankYouMessage onDismiss={() => setShowMessage(false)} />
        )}
      </div>
    </div>
  );
}
