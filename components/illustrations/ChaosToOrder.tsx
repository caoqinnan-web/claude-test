export default function ChaosToOrderIllustration() {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Left side: Chaos - messy scattered items */}
      <g className="opacity-80">
        {/* Scattered papers */}
        <path
          d="M 50 100 L 80 95 L 85 130 L 55 135 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-neutral-gray dark:text-gray-600"
          transform="rotate(-15 67.5 115)"
        />
        <path
          d="M 70 150 L 100 145 L 105 180 L 75 185 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-neutral-gray dark:text-gray-600"
          transform="rotate(25 87.5 165)"
        />

        {/* Tangled lines representing chaos */}
        <path
          d="M 40 200 Q 60 180, 80 200 T 120 190 T 150 210"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="text-coral/60"
        />
        <path
          d="M 50 230 Q 90 210, 110 240 T 140 225"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="text-coral/60"
        />

        {/* Scattered dots */}
        <circle cx="90" cy="250" r="3" fill="currentColor" className="text-neutral-gray" />
        <circle cx="120" cy="270" r="3" fill="currentColor" className="text-neutral-gray" />
        <circle cx="65" cy="280" r="3" fill="currentColor" className="text-neutral-gray" />

        {/* Question marks */}
        <text x="100" y="120" fontSize="24" fill="currentColor" className="text-coral/70" fontWeight="bold">?</text>
        <text x="130" y="160" fontSize="20" fill="currentColor" className="text-coral/70" fontWeight="bold">?</text>
      </g>

      {/* Center: Arrow/Transformation */}
      <g>
        {/* Large arrow */}
        <path
          d="M 250 200 L 370 200"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-accent-blue dark:text-accent-blue"
        />
        <path
          d="M 350 185 L 370 200 L 350 215"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-accent-blue dark:text-accent-blue"
        />

        {/* Sparkles around arrow */}
        <path
          d="M 300 170 L 305 180 L 310 170 M 305 165 L 305 185"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-mint"
        />
        <path
          d="M 320 225 L 323 232 L 326 225 M 323 222 L 323 235"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-mint"
        />
      </g>

      {/* Right side: Order - organized grid and clean lines */}
      <g>
        {/* Organized grid/folders */}
        <rect
          x="450"
          y="100"
          width="80"
          height="60"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-deep-text dark:text-white"
        />
        <line x1="450" y1="120" x2="530" y2="120" stroke="currentColor" strokeWidth="2" className="text-deep-text dark:text-white" />

        <rect
          x="550"
          y="100"
          width="80"
          height="60"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-deep-text dark:text-white"
        />
        <line x1="550" y1="120" x2="630" y2="120" stroke="currentColor" strokeWidth="2" className="text-deep-text dark:text-white" />

        {/* Organized list items */}
        <g className="text-neutral-gray dark:text-gray-400">
          <line x1="460" y1="200" x2="620" y2="200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="460" y1="230" x2="620" y2="230" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="460" y1="260" x2="620" y2="260" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Checkmarks */}
        <path
          d="M 640 195 L 645 202 L 655 188"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-mint"
        />
        <path
          d="M 640 225 L 645 232 L 655 218"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-mint"
        />
        <path
          d="M 640 255 L 645 262 L 655 248"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="text-mint"
        />

        {/* Peaceful wave at bottom */}
        <path
          d="M 450 310 Q 500 300, 550 310 T 650 310"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="text-accent-blue/60"
        />
      </g>
    </svg>
  );
}
