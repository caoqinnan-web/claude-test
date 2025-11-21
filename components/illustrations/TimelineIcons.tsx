// Timeline icon components for About page

// 河南-新疆-哈尔滨成长
export function GrowthIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" className="text-coral/30" />
      {/* Wheat/cotton plant */}
      <path
        d="M 40 25 L 40 55"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-deep-text dark:text-white"
      />
      <path
        d="M 40 30 Q 32 28, 32 35 M 40 30 Q 48 28, 48 35"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className="text-mint"
      />
      <path
        d="M 40 38 Q 34 36, 34 43 M 40 38 Q 46 36, 46 43"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className="text-mint"
      />
      {/* Ground */}
      <line x1="28" y1="55" x2="52" y2="55" stroke="currentColor" strokeWidth="2" className="text-neutral-gray" />
    </svg>
  );
}

// 参军入伍
export function MilitaryIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" className="text-accent-blue/30" />
      {/* Shield */}
      <path
        d="M 40 25 L 52 30 L 52 42 Q 52 52, 40 58 Q 28 52, 28 42 L 28 30 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-deep-text dark:text-white"
      />
      {/* Star in shield */}
      <path
        d="M 40 36 L 42 42 L 48 42 L 43 46 L 45 52 L 40 48 L 35 52 L 37 46 L 32 42 L 38 42 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        className="text-accent-blue"
      />
    </svg>
  );
}

// 职场经历
export function CareerIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" className="text-purple/30" />
      {/* Briefcase */}
      <rect
        x="28"
        y="38"
        width="24"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-deep-text dark:text-white"
      />
      <path
        d="M 34 38 L 34 33 Q 34 30, 37 30 L 43 30 Q 46 30, 46 33 L 46 38"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-deep-text dark:text-white"
      />
      <line x1="28" y1="44" x2="52" y2="44" stroke="currentColor" strokeWidth="2" className="text-neutral-gray" />
    </svg>
  );
}

// 辞职 - 转折点
export function TurningPointIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" className="text-coral/30" />
      {/* Crossroads/fork in road */}
      <path
        d="M 40 55 L 40 40 M 40 40 L 28 28 M 40 40 L 52 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-deep-text dark:text-white"
      />
      {/* Sparkle at the fork */}
      <circle cx="40" cy="40" r="3" fill="currentColor" className="text-coral" />
      <path
        d="M 40 32 L 40 48 M 32 40 L 48 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-coral"
      />
    </svg>
  );
}

// 西藏志愿者
export function VolunteerIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" className="text-mint/30" />
      {/* Mountain peaks */}
      <path
        d="M 20 52 L 30 32 L 40 42 L 50 28 L 60 52"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-deep-text dark:text-white"
      />
      {/* Sun */}
      <circle cx="50" cy="35" r="4" fill="currentColor" className="text-mint" />
      <path
        d="M 50 28 L 50 32 M 50 38 L 50 42 M 43 35 L 47 35 M 53 35 L 57 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-mint"
      />
    </svg>
  );
}

// 整理师职业
export function OrganizerIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" className="text-accent-blue/30" />
      {/* Heart with organization lines */}
      <path
        d="M 40 52 Q 28 42, 28 35 Q 28 28, 34 28 Q 37 28, 40 32 Q 43 28, 46 28 Q 52 28, 52 35 Q 52 42, 40 52 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-coral"
      />
      {/* Grid inside heart */}
      <line x1="40" y1="32" x2="40" y2="48" stroke="currentColor" strokeWidth="1" className="text-coral/50" />
      <line x1="33" y1="38" x2="47" y2="38" stroke="currentColor" strokeWidth="1" className="text-coral/50" />
    </svg>
  );
}
