interface CustomIconProps {
  d: string;
  size?: number;
}

export function CustomIcon({ d, size = 24 }: CustomIconProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    >
      <path d={d} />
    </svg>
  );
}