import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Report Crime', href: '/', current: true },
  { name: 'New Scene', href: '/new-crime-scene', current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const handleLogout = () => {
  // Handle the logout action here
  localStorage.setItem("auth", false);
  
  // Add any additional steps for logging out (e.g., redirect to the login page)
  window.location.href = '/login'; // Uncomment this line if you want to redirect after logout
};

const handleLogin = () => {
  // Add any additional steps for logging out (e.g., redirect to the login page)
  window.location.href = '/login'; // Uncomment this line if you want to redirect after logout
};

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {localStorage.getItem("auth") === "true" && (
                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
                {localStorage.getItem("auth") === "false" && (
                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
