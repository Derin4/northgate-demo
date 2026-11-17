// A small animated process map for the hero. Pure SVG + CSS, no client code.
export default function ProcessMap() {
  const box = (x, y, label, d) => (
    <g className='node-in' style={{ "--d": `${d}ms` }}>
      <rect
        x={x}
        y={y}
        width='92'
        height='38'
        rx='4'
        fill='#12263a'
        stroke='#c8963e'
        strokeWidth='1.2'
      />
      <text
        x={x + 46}
        y={y + 24}
        textAnchor='middle'
        fontSize='11'
        fill='#f6f4ef'
        fontFamily='inherit'
      >
        {label}
      </text>
    </g>
  );
  const line = (d, delay) => (
    <path
      d={d}
      pathLength='1'
      fill='none'
      stroke='#1f7a7a'
      strokeWidth='1.6'
      className='draw'
      style={{ "--d": `${delay}ms` }}
    />
  );
  return (
    <svg
      viewBox='0 0 360 200'
      className='h-auto w-full'
      role='img'
      aria-label='A simple process map: listen, map, decide, hand over'
    >
      {box(10, 20, "Listen", 400)}
      {line("M102 39H134", 700)}
      {box(134, 20, "Map", 900)}
      {line("M226 39H258", 1200)}
      <g className='node-in' style={{ "--d": "1400ms" }}>
        <path
          d='M304 8l42 31-42 31-42-31z'
          fill='#12263a'
          stroke='#c8963e'
          strokeWidth='1.2'
        />
        <text x='304' y='43' textAnchor='middle' fontSize='11' fill='#f6f4ef'>
          Decide
        </text>
      </g>
      {line("M304 70V120", 1700)}
      {line("M304 120H238", 1900)}
      {box(146, 101, "Hand over", 2100)}
      {line("M146 120H102", 2400)}
      <g className='node-in' style={{ "--d": "2600ms" }}>
        <circle cx='80' cy='120' r='12' fill='#c8963e' />
        <circle
          cx='80'
          cy='120'
          r='12'
          fill='none'
          stroke='#c8963e'
          strokeWidth='1.5'
          className='pulse-ring'
        />
        <path
          d='M74 120l4 4 8-9'
          fill='none'
          stroke='#12263a'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <text x='10' y='178' fontSize='10' fill='#f6f4ef' opacity='.55'>
        Illustrative flow
      </text>
    </svg>
  );
}
