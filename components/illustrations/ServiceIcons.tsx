// Service icon illustrations for homepage cards

// 数字空间整理
export function DigitalSpaceIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Computer/laptop outline */}
      <rect
        x="20"
        y="30"
        width="80"
        height="50"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-deep-text dark:text-white"
      />
      {/* Screen content - organized grid */}
      <g className="text-accent-blue">
        <rect x="30" y="40" width="15" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="50" y="40" width="15" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="70" y="40" width="15" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="30" y="58" width="15" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="50" y="58" width="15" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="70" y="58" width="15" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>
      {/* Laptop base */}
      <path
        d="M 15 80 L 25 80 L 20 85 L 100 85 L 95 80 L 105 80"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-deep-text dark:text-white"
      />
      {/* Sparkles indicating clean state */}
      <path
        d="M 90 25 L 92 30 L 94 25 M 92 23 L 92 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-mint"
      />
      <path
        d="M 105 40 L 106 43 L 107 40 M 106 39 L 106 44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-mint"
      />
    </svg>
  );
}

// AI 工具
export function AIToolIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Robot/AI head */}
      <rect
        x="35"
        y="40"
        width="50"
        height="45"
        rx="8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-deep-text dark:text-white"
      />
      {/* Antenna */}
      <line x1="60" y1="40" x2="60" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-deep-text dark:text-white" />
      <circle cx="60" cy="25" r="3" fill="currentColor" className="text-accent-blue" />
      {/* Eyes */}
      <circle cx="48" cy="55" r="4" fill="currentColor" className="text-accent-blue" />
      <circle cx="72" cy="55" r="4" fill="currentColor" className="text-accent-blue" />
      {/* Smile/mouth */}
      <path
        d="M 45 70 Q 60 78, 75 70"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        className="text-coral"
      />
      {/* Circuit lines on sides */}
      <g className="text-neutral-gray dark:text-gray-500">
        <path d="M 20 50 L 35 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="50" r="2" fill="currentColor" />
        <path d="M 20 65 L 35 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="65" r="2" fill="currentColor" />

        <path d="M 85 50 L 100 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="103" cy="50" r="2" fill="currentColor" />
        <path d="M 85 65 L 100 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="103" cy="65" r="2" fill="currentColor" />
      </g>
      {/* Sparkle effect */}
      <path
        d="M 25 30 L 28 36 L 31 30 M 28 27 L 28 39"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-purple"
      />
    </svg>
  );
}

// 家庭空间整理
export function HomeSpaceIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* House outline */}
      <path
        d="M 60 25 L 95 50 L 95 90 L 25 90 L 25 50 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
        className="text-deep-text dark:text-white"
      />
      {/* Roof line */}
      <path
        d="M 20 50 L 60 20 L 100 50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-deep-text dark:text-white"
      />
      {/* Door */}
      <rect
        x="50"
        y="65"
        width="20"
        height="25"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-coral"
      />
      <circle cx="65" cy="77" r="1.5" fill="currentColor" className="text-coral" />
      {/* Windows */}
      <rect
        x="35"
        y="55"
        width="12"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-accent-blue"
      />
      <line x1="41" y1="55" x2="41" y2="67" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue" />
      <line x1="35" y1="61" x2="47" y2="61" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue" />

      <rect
        x="73"
        y="55"
        width="12"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-accent-blue"
      />
      <line x1="79" y1="55" x2="79" y2="67" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue" />
      <line x1="73" y1="61" x2="85" y2="61" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue" />

      {/* Heart above house */}
      <path
        d="M 60 42 Q 55 38, 55 35 Q 55 32, 57.5 32 Q 58.5 32, 60 34 Q 61.5 32, 62.5 32 Q 65 32, 65 35 Q 65 38, 60 42 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        className="text-mint"
      />
    </svg>
  );
}
