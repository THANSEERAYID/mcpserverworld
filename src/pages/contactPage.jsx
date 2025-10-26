import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Contact() {

  return (
    <div >
          <svg viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="900" height="700" fill="#f9fafb" />
  
  <text x="450" y="40" font-family="Arial" font-size="28" text-anchor="middle" font-weight="bold" fill="#1e3a8a">LangGraph AI Agent Architecture</text>
  <text x="450" y="70" font-family="Arial" font-size="14" text-anchor="middle" fill="#64748b">Detailed system design for LLM-powered agent with memory, tools, and orchestration</text>
  
  <rect x="50" y="90" width="800" height="70" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="2" />
  <text x="450" y="120" font-family="Arial" font-size="18" text-anchor="middle" font-weight="bold" fill="#0369a1">Client Applications</text>
  
  <rect x="80" y="130" width="100" height="20" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="130" y="145" font-family="Arial" font-size="12" text-anchor="middle">Web UI</text>
  
  <rect x="200" y="130" width="100" height="20" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="250" y="145" font-family="Arial" font-size="12" text-anchor="middle">Mobile App</text>
  
  <rect x="320" y="130" width="100" height="20" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="370" y="145" font-family="Arial" font-size="12" text-anchor="middle">Desktop Client</text>
  
  <rect x="440" y="130" width="100" height="20" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="490" y="145" font-family="Arial" font-size="12" text-anchor="middle">CLI</text>
  
  <rect x="560" y="130" width="100" height="20" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="610" y="145" font-family="Arial" font-size="12" text-anchor="middle">API Clients</text>
  
  <rect x="680" y="130" width="140" height="20" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="750" y="145" font-family="Arial" font-size="12" text-anchor="middle">Human-in-the-loop UI</text>
  
  <rect x="50" y="180" width="800" height="280" rx="8" fill="#ecfdf5" stroke="#065f46" stroke-width="2" />
  <text x="450" y="205" font-family="Arial" font-size="20" text-anchor="middle" font-weight="bold" fill="#065f46">LangGraph Orchestration Layer</text>
  
  <rect x="80" y="220" width="740" height="50" rx="5" fill="#d1fae5" stroke="#065f46" stroke-width="1" />
  {/* <text x="450" y="250" font-family="Arial" font-size="16" text-anchor="middle" fill="#065f46">State Schema</text> */}
  
  <rect x="100" y="230" width="120" height="30" rx="3" fill="#a7f3d0" stroke="#065f46" stroke-width="1" />
  <text x="160" y="250" font-family="Arial" font-size="12" text-anchor="middle">conversation history</text>
  
  <rect x="230" y="230" width="100" height="30" rx="3" fill="#a7f3d0" stroke="#065f46" stroke-width="1" />
  <text x="280" y="250" font-family="Arial" font-size="12" text-anchor="middle">current goal</text>
  
  <rect x="340" y="230" width="120" height="30" rx="3" fill="#a7f3d0" stroke="#065f46" stroke-width="1" />
  <text x="400" y="250" font-family="Arial" font-size="12" text-anchor="middle">retrieved memory</text>
  
  <rect x="470" y="230" width="100" height="30" rx="3" fill="#a7f3d0" stroke="#065f46" stroke-width="1" />
  <text x="520" y="250" font-family="Arial" font-size="12" text-anchor="middle">tool results</text>
  
  <rect x="580" y="230" width="100" height="30" rx="3" fill="#a7f3d0" stroke="#065f46" stroke-width="1" />
  <text x="630" y="250" font-family="Arial" font-size="12" text-anchor="middle">user profile</text>
  
  <rect x="690" y="230" width="120" height="30" rx="3" fill="#a7f3d0" stroke="#065f46" stroke-width="1" />
  <text x="750" y="250" font-family="Arial" font-size="12" text-anchor="middle">intermediate steps</text>
  
  <rect x="80" y="290" width="740" height="150" rx="5" fill="#d1fae5" stroke="#065f46" stroke-width="1" />
  <text x="450" y="310" font-family="Arial" font-size="16" text-anchor="middle" fill="#065f46">StateGraph Workflow</text>
  
  <rect x="100" y="330" width="100" height="80" rx="5" fill="#a7f3d0" stroke="#065f46" stroke-width="2" />
  <text x="150" y="355" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">Input</text>
  <text x="150" y="370" font-family="Arial" font-size="12" text-anchor="middle">Processing</text>
  <text x="150" y="385" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Parses user input</text>
  <text x="150" y="398" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Updates state</text>
  
  <rect x="220" y="330" width="100" height="80" rx="5" fill="#a7f3d0" stroke="#065f46" stroke-width="2" />
  <text x="270" y="355" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">Memory</text>
  <text x="270" y="370" font-family="Arial" font-size="12" text-anchor="middle">Retrieval</text>
  <text x="270" y="385" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Vector DB lookup</text>
  <text x="270" y="398" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Semantic search</text>
  
  <rect x="340" y="330" width="100" height="80" rx="5" fill="#a7f3d0" stroke="#065f46" stroke-width="2" />
  <text x="390" y="355" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">LLM</text>
  <text x="390" y="370" font-family="Arial" font-size="12" text-anchor="middle">Planning</text>
  <text x="390" y="385" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Determines steps</text>
  <text x="390" y="398" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Selects tools</text>
  
  <rect x="460" y="330" width="100" height="80" rx="5" fill="#a7f3d0" stroke="#065f46" stroke-width="2" />
  <text x="510" y="355" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">Tool</text>
  <text x="510" y="370" font-family="Arial" font-size="12" text-anchor="middle">Execution</text>
  <text x="510" y="385" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Calls external APIs</text>
  <text x="510" y="398" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Uses MCP protocol</text>
  
  <rect x="580" y="330" width="100" height="80" rx="5" fill="#a7f3d0" stroke="#065f46" stroke-width="2" />
  <text x="630" y="355" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">Response</text>
  <text x="630" y="370" font-family="Arial" font-size="12" text-anchor="middle">Generation</text>
  <text x="630" y="385" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Formats answer</text>
  <text x="630" y="398" font-family="Arial" font-size="10" text-anchor="middle" fill="#065f46">Updates memory</text>
  
  <rect x="700" y="330" width="100" height="80" rx="5" fill="#fee2e2" stroke="#991b1b" stroke-width="2" stroke-dasharray="5,3" />
  <text x="750" y="355" font-family="Arial" font-size="12" text-anchor="middle" font-weight="bold">Human</text>
  <text x="750" y="370" font-family="Arial" font-size="12" text-anchor="middle">Validation</text>
  <text x="750" y="385" font-family="Arial" font-size="10" text-anchor="middle" fill="#991b1b">Review response</text>
  <text x="750" y="398" font-family="Arial" font-size="10" text-anchor="middle" fill="#991b1b">(Optional)</text>
  
  <line x1="200" y1="370" x2="220" y2="370" stroke="#065f46" stroke-width="2" />
  <polygon points="220,370 212,366 212,374" fill="#065f46" />
  
  <line x1="320" y1="370" x2="340" y2="370" stroke="#065f46" stroke-width="2" />
  <polygon points="340,370 332,366 332,374" fill="#065f46" />
  
  <line x1="440" y1="370" x2="460" y2="370" stroke="#065f46" stroke-width="2" />
  <polygon points="460,370 452,366 452,374" fill="#065f46" />
  
  <line x1="560" y1="370" x2="580" y2="370" stroke="#065f46" stroke-width="2" />
  <polygon points="580,370 572,366 572,374" fill="#065f46" />
  
  <line x1="680" y1="370" x2="700" y2="370" stroke="#991b1b" stroke-width="2" stroke-dasharray="5,3" />
  <polygon points="700,370 692,366 692,374" fill="#991b1b" />
  
  <path d="M 750 410 C 750 430 150 430 150 410" fill="none" stroke="#065f46" stroke-width="2" stroke-dasharray="5,3" />
  <polygon points="150,410 158,414 158,406" fill="#065f46" />
  {/* <text x="450" y="445" font-family="Arial" font-size="12" text-anchor="middle" fill="#065f46">Conditional Loop (if conversation continues)</text> */}
  
  <rect x="50" y="480" width="350" height="150" rx="8" fill="#ede9fe" stroke="#5b21b6" stroke-width="2" />
  <text x="225" y="505" font-family="Arial" font-size="18" text-anchor="middle" font-weight="bold" fill="#5b21b6">LLM Integration</text>
  
  <rect x="80" y="525" width="290" height="90" rx="5" fill="#ddd6fe" stroke="#5b21b6" stroke-width="1" />
  
  <rect x="100" y="540" width="120" height="60" rx="3" fill="#c4b5fd" stroke="#5b21b6" stroke-width="1" />
  <text x="160" y="560" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">LLM Models</text>
  <text x="160" y="578" font-family="Arial" font-size="11" text-anchor="middle">GPT-4 / Claude</text>
  <text x="160" y="592" font-family="Arial" font-size="11" text-anchor="middle">Reasoning Engine</text>
  
  <rect x="230" y="540" width="120" height="60" rx="3" fill="#c4b5fd" stroke="#5b21b6" stroke-width="1" />
  <text x="290" y="560" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">Prompting</text>
  <text x="290" y="578" font-family="Arial" font-size="11" text-anchor="middle">Templates</text>
  <text x="290" y="592" font-family="Arial" font-size="11" text-anchor="middle">Token Management</text>
  
  <rect x="420" y="480" width="430" height="150" rx="8" fill="#fff7ed" stroke="#9a3412" stroke-width="2" />
  <text x="635" y="505" font-family="Arial" font-size="18" text-anchor="middle" font-weight="bold" fill="#9a3412">External Tools & Connectivity</text>
  
  <rect x="440" y="525" width="120" height="90" rx="5" fill="#fed7aa" stroke="#9a3412" stroke-width="1" />
  <text x="500" y="545" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">MCP</text>
  <text x="500" y="565" font-family="Arial" font-size="11" text-anchor="middle">Model Context</text> 
  <text x="500" y="580" font-family="Arial" font-size="11" text-anchor="middle">Protocol</text>
  <text x="500" y="595" font-family="Arial" font-size="11" text-anchor="middle">External Context</text>
  <text x="500" y="610" font-family="Arial" font-size="11" text-anchor="middle">Retrieval</text>
  
  <rect x="575" y="525" width="120" height="90" rx="5" fill="#fed7aa" stroke="#9a3412" stroke-width="1" />
  <text x="635" y="545" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">Function Calls</text>
  <text x="635" y="565" font-family="Arial" font-size="11" text-anchor="middle">API Integration</text>
  <text x="635" y="580" font-family="Arial" font-size="11" text-anchor="middle">JSON I/O</text>
  <text x="635" y="595" font-family="Arial" font-size="11" text-anchor="middle">Tool Selection</text>
  <text x="635" y="610" font-family="Arial" font-size="11" text-anchor="middle">Parameter Handling</text>
  
  <rect x="710" y="525" width="120" height="90" rx="5" fill="#fed7aa" stroke="#9a3412" stroke-width="1" />
  <text x="770" y="545" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold">External APIs</text>
  <text x="770" y="565" font-family="Arial" font-size="11" text-anchor="middle">Search</text>
  <text x="770" y="580" font-family="Arial" font-size="11" text-anchor="middle">Databases</text>
  <text x="770" y="595" font-family="Arial" font-size="11" text-anchor="middle">Calculator</text>
  <text x="770" y="610" font-family="Arial" font-size="11" text-anchor="middle">Knowledge Bases</text>
  
  <rect x="50" y="650" width="800" height="30" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="2" />
  <text x="450" y="670" font-family="Arial" font-size="14" text-anchor="middle" font-weight="bold" fill="#0369a1">Memory Layer</text>
  
  <rect x="100" y="650" width="200" height="30" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="200" y="670" font-family="Arial" font-size="12" text-anchor="middle">Vector Database</text>
  
  <rect x="350" y="650" width="200" height="30" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="450" y="670" font-family="Arial" font-size="12" text-anchor="middle">State Storage</text>
  
  <rect x="600" y="650" width="200" height="30" rx="3" fill="#bae6fd" stroke="#0369a1" stroke-width="1" />
  <text x="700" y="670" font-family="Arial" font-size="12" text-anchor="middle">Conversation History</text>
  
  <line x1="450" y1="160" x2="450" y2="180" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5" />
  <polygon points="450,180 445,172 455,172" fill="#64748b" />
  
  <line x1="225" y1="460" x2="225" y2="480" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5" />
  <polygon points="225,480 220,472 230,472" fill="#64748b" />
  
  <line x1="635" y1="460" x2="635" y2="480" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5" />
  <polygon points="635,480 630,472 640,472" fill="#64748b" />
  
  <line x1="450" y1="460" x2="450" y2="650" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5" />
  <polygon points="450, 650 445, 642 455, 642" fill="#64748b" />
</svg>

</div>

  )
}
