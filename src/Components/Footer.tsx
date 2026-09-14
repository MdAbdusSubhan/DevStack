import Logo from "../assets/logo-text.png"

export default function Footer() {
    return (
        <footer className="w-full bg-white px-6 py-10 sm:px-10 lg:px-16">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:justify-between">

                <div className="max-w-xs">

                    <img src={Logo} alt="Dev Stack logo" />


                    <p className="mt-3 text-sm text-gray-400">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="mt-4 flex gap-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-gray-700">GitHub</a>
                        <a href="#" className="hover:text-gray-700">Twitter</a>
                        <a href="#" className="hover:text-gray-700">LinkedIn</a>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-gray-900">PRODUCT</p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-700">Home</a></li>
                            <li><a href="#" className="hover:text-gray-700">Technologies</a></li>
                            <li><a href="#" className="hover:text-gray-700">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold tracking-wide text-gray-900">COMPANY</p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-700">About</a></li>
                            <li><a href="#" className="hover:text-gray-700">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-700">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold tracking-wide text-gray-900">LEGAL</p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-700">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-700">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mx-auto mt-10 max-w-6xl border-gray-100" />

            <div className="mx-auto flex max-w-6xl flex-col-reverse gap-2 pt-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-600">Privacy</a>
                    <a href="#" className="hover:text-gray-600">Terms</a>
                </div>
            </div>
        </footer>
    );
}