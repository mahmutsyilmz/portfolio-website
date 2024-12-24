import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = 50;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)';
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x > canvas.width || particle.x < 0) particle.dx *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.dy *= -1;

        if (mouse.x != null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            particle.x -= Math.cos(angle) * 1;
            particle.y -= Math.sin(angle) * 1;
          }
        }
      });

      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = isDark 
              ? `rgba(96, 165, 250, ${0.2 * (1 - distance / 100)})`
              : `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    resize();
    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
};

export default NetworkBackground; 