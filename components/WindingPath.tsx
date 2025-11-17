const WindingPath = () => (
  <svg
    width="100"
    height="600"
    viewBox="0 0 100 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: '100%' }}
  >
    <path
      d="M 50,0 
         C 50,50 80,80 50,120
         S 20,160 50,200
         S 80,240 50,280
         S 20,320 50,360
         S 80,400 50,440
         S 20,480 50,520
         S 80,560 50,600"
      stroke="var(--foundation-black)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="10 10"
    />
  </svg>
);

export default WindingPath;
