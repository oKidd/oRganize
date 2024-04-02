import type { Metadata } from "next";
import Navbar from "../../components/HomeNavbar";

export const metadata: Metadata = {
  title: "oRganize",
  description: "Sign Up",
};

export default function Signup() {
  return (
    <div className="h-screen bg-neutral-900 text-white w-100">
      <Navbar />
      <div className="flex flex-row h-full pt-16">
        <div id="left" className="w-2/4 my-auto">
          <form className="mx-auto w-2/4 rounded-lg text-center pt-5 pb-5 bg-neutral-950/50">
            <h1 className="text-xl font-bold mb-5">Registrate con</h1>
            <div className="flex flex-row justify-center pb-5 w-3/4 mx-auto">
              <button
                type="button"
                className="bg-neutral-900 hover:bg-neutral-950 duration-150 rounded-lg p-3 flex me-5 w-2/4 justify-center"
              >
                <img
                  src="https://img.icons8.com/?size=30&id=17949&format=png"
                  className="me-2"
                />
                <p className="my-auto font-semibold">Google</p>
              </button>
              <button
                type="button"
                className="bg-neutral-900 hover:bg-neutral-950 duration-150 rounded-lg p-3 flex w-2/4 justify-center"
              >
                <img
                  src="https://img.icons8.com/?size=30&id=30998&format=png"
                  className="me-2"
                />
                <p className="my-auto font-semibold">Discord</p>
              </button>
            </div>
            <div className="w-3/4 border-b-2 mx-auto mb-5 border-neutral-600"></div>
            <input
              className="w-3/4 p-2 rounded-lg mb-2 indent-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-3/4 p-2 rounded-lg mb-2 indent-2"
              type="text"
              placeholder="Username"
            />
            <input
              className="w-3/4 p-2 rounded-lg mb-2 indent-2"
              type="password"
              placeholder="Password"
            />
            <input
              className="w-3/4 p-2 rounded-lg mb-5 indent-2"
              type="password"
              placeholder="Password Verify"
            />
            <br />
            <button
              className="w-3/4 bg-red-500 hover:bg-red-700 duration-150 p-2 rounded-lg mb-2"
              type="submit"
            >
              Sign Up
            </button>
            <br />
          </form>
        </div>
        <div id="right" className="w-2/4 my-auto">
          <img src="/register/register.png" className="w-3/5 mx-auto my-auto" />
        </div>
      </div>
    </div>
  );
}
