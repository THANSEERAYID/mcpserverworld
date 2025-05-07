import platforms from '../Images/what-is-mcp.png'

const features = [
  {
    name: 'MCP Hosts :',
    description: 'Programs like Claude Desktop, IDEs, or AI tools that want to access data through MCP Server.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
    </svg>,
  },
  {
    name: 'MCP Clients :',
    description: 'Clients that establish connections with MCP servers, acting as trusted bridges, allowing AI apps to securely send, receive with real-time data, APIs, and external tools.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
    </svg>,
  },
  {
    name: 'MCP Servers :',
    description: 'Small programs that act as connectors between MCP clients and tools, providing specific abilities to connected tools.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
    </svg>,
  },
];


export default function ImproveSales() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Move Fast and Build Things</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Better Workflow</p>
              <p className="mt-6 text-[17px] leading-8 text-gray-800">
              <span className="bg-yellow-200">Think of MCP like a USB-C port for AI applications.</span> Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.
                {/* Experience an enhanced workflow by <span className="bg-yellow-200">integrating LLMs with MCP servers, enabling seamless interaction with external tools, databases, and APIs. This allows your AI to perform tasks beyond answering questions.</span> */}
              </p>
              <div className="flex items-center justify-center lg:hidden pt-5 max-w-sm">
                <img
                  alt="Platform Integration"
                  src={platforms}
                  width={2432}
                  height={1442}
                  className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[34rem] xl:w-[42rem]"
                />
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.icon}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:flex items-center justify-center hidden">
            <img
              alt="Product screenshot"
              src={platforms}
              width={2432}
              height={1442}
              className="w-full max-w-none rounded-xl ring-1 ring-gray-400/10 lg:w-[34rem] xl:w-[42rem]"/>
          </div>
        </div>
      </div>
    </div>
  )
}
