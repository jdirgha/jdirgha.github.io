import React, { useEffect, useRef } from 'react';

const ThreeJSAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size with high DPI support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 800 * dpr;
    canvas.height = 400 * dpr;
    canvas.style.width = '800px';
    canvas.style.height = '400px';
    ctx.scale(dpr, dpr);
    
    let startTime = null;
    let phase = 'line';
    let phaseStartTime = 0;
    let blinkCount = 0;
    let particles = [];
    let animationComplete = false;
    
    // Animation phases timing (in milliseconds)
    const PHASE_DURATIONS = {
      line: 1200,
      eyeForm: 2000,
      eyeBlink: 2500,
      codeTransform: 3500
    };

    // Eye properties - more professional proportions
    const eyeCenter = { x: 400, y: 200 };
    const eyeWidth = 100;
    const eyeHeight = 45;
    const pupilRadius = 12;
    const irisRadius = 22;

    // Professional code with better structure
    const codeLines = [
      "const vision = {",
      "  analyze: (input) => processData(input),",
      "  transform: (data) => generateSolution(data),",
      "  execute: () => deployInnovation()",
      "};",
      "",
      "vision.execute();"
    ];

    // Particle system for code transformation
    class Particle {
      constructor(x, y, targetX, targetY, char = '') {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.char = char;
        this.alpha = 0;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 0.02 + 0.01;
        this.life = 1;
      }
      
      update(progress) {
        const easeProgress = this.easeInOutQuart(progress);
        this.x = this.x + (this.targetX - this.x) * easeProgress * this.speed;
        this.y = this.y + (this.targetY - this.y) * easeProgress * this.speed;
        this.alpha = Math.min(1, progress * 2);
        this.life = Math.max(0, this.life - 0.005);
      }
      
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      }
      
      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha * this.life;
        ctx.fillStyle = '#e94560';
        ctx.font = '14px "Courier New", monospace';
        if (this.char) {
          ctx.fillText(this.char, this.x, this.y);
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    // Utility functions
    const easeInOutCubic = (t) => {
      if (t < 0.5) return 4 * t * t * t;
      return 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    
    const easeOutElastic = (t) => {
      const c4 = (2 * Math.PI) / 3;
      return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    };

    const easeInOutQuart = (t) => {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const drawLine = (progress) => {
      // Gradient line with glow effect
      const lineLength = 120 * progress;
      const startX = eyeCenter.x - lineLength / 2;
      const endX = eyeCenter.x + lineLength / 2;
      
      // Glow effect
      ctx.shadowColor = '#e94560';
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#e94560';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      
      ctx.beginPath();
      ctx.moveTo(startX, eyeCenter.y);
      ctx.lineTo(endX, eyeCenter.y);
      ctx.stroke();
      
      ctx.shadowBlur = 0;
    };

    const drawProfessionalEye = (formProgress, blinkProgress = 0) => {
      const currentEyeHeight = eyeHeight * (1 - blinkProgress * 0.95);
      
      // Eye socket shadow
      ctx.save();
      ctx.shadowColor = 'rgba(26, 26, 46, 0.3)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 2;
      
      // Main eye shape - more realistic almond shape
      ctx.strokeStyle = '#533483';
      ctx.fillStyle = '#ffffff';
      ctx.lineWidth = 2;
      
      // Create almond eye shape
      ctx.beginPath();
      const eyeLeft = eyeCenter.x - (eyeWidth * 0.5 * formProgress);
      const eyeRight = eyeCenter.x + (eyeWidth * 0.5 * formProgress);
      const eyeTop = eyeCenter.y - (currentEyeHeight * 0.5);
      const eyeBottom = eyeCenter.y + (currentEyeHeight * 0.5);
      
      // Left curve
      ctx.moveTo(eyeLeft, eyeCenter.y);
      ctx.quadraticCurveTo(eyeLeft + 15, eyeTop, eyeCenter.x - 10, eyeTop);
      // Top curve
      ctx.quadraticCurveTo(eyeCenter.x + 10, eyeTop, eyeRight, eyeCenter.y);
      // Right curve
      ctx.quadraticCurveTo(eyeRight - 15, eyeBottom, eyeCenter.x + 10, eyeBottom);
      // Bottom curve
      ctx.quadraticCurveTo(eyeCenter.x - 10, eyeBottom, eyeLeft, eyeCenter.y);
      
      ctx.fill();
      ctx.stroke();
      ctx.restore();
      
      if (formProgress > 0.6 && blinkProgress < 0.8) {
        // Iris with gradient
        const gradient = ctx.createRadialGradient(
          eyeCenter.x - 3, eyeCenter.y - 3, 0,
          eyeCenter.x, eyeCenter.y, irisRadius * formProgress
        );
        gradient.addColorStop(0, '#7B68EE');
        gradient.addColorStop(0.7, '#533483');
        gradient.addColorStop(1, '#2E2E5E');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(eyeCenter.x, eyeCenter.y, irisRadius * formProgress, 0, Math.PI * 2);
        ctx.fill();
        
        // Pupil
        ctx.fillStyle = '#1a1a2e';
        ctx.beginPath();
        ctx.arc(eyeCenter.x + 1, eyeCenter.y + 1, pupilRadius * formProgress, 0, Math.PI * 2);
        ctx.fill();
        
        // Multiple highlights for depth
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(eyeCenter.x - 4, eyeCenter.y - 4, 3 * formProgress, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(eyeCenter.x + 6, eyeCenter.y - 2, 2 * formProgress, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle iris texture
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const innerRadius = 8 * formProgress;
          const outerRadius = 18 * formProgress;
          ctx.beginPath();
          ctx.moveTo(
            eyeCenter.x + Math.cos(angle) * innerRadius,
            eyeCenter.y + Math.sin(angle) * innerRadius
          );
          ctx.lineTo(
            eyeCenter.x + Math.cos(angle) * outerRadius,
            eyeCenter.y + Math.sin(angle) * outerRadius
          );
          ctx.stroke();
        }
      }
    };

    const initializeParticles = () => {
      particles = [];
      
      // Create particles from eye position
      for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 2;
        const radius = Math.random() * 30 + 20;
        const x = eyeCenter.x + Math.cos(angle) * radius;
        const y = eyeCenter.y + Math.sin(angle) * radius;
        
        particles.push(new Particle(x, y, Math.random() * 800, Math.random() * 400));
      }
      
      // Create particles for code characters
      let charIndex = 0;
      codeLines.forEach((line, lineIndex) => {
        for (let i = 0; i < line.length; i++) {
          const targetX = 150 + i * 9;
          const targetY = 120 + lineIndex * 25;
          
          const angle = (charIndex / 100) * Math.PI * 2;
          const radius = Math.random() * 40 + 30;
          const startX = eyeCenter.x + Math.cos(angle) * radius;
          const startY = eyeCenter.y + Math.sin(angle) * radius;
          
          particles.push(new Particle(startX, startY, targetX, targetY, line[i]));
          charIndex++;
        }
      });
    };

    const drawFinalCode = () => {
      ctx.save();
      
      // Background glow for code
      ctx.shadowColor = 'rgba(233, 69, 96, 0.3)';
      ctx.shadowBlur = 15;
      
      ctx.font = 'bold 16px "Courier New", monospace';
      
      codeLines.forEach((line, lineIndex) => {
        const y = 120 + lineIndex * 25;
        
        // Syntax highlighting
        if (line.includes('const') || line.includes('function')) {
          ctx.fillStyle = '#9370DB';
        } else if (line.includes('=>') || line.includes('()')) {
          ctx.fillStyle = '#20B2AA';
        } else if (line.includes('vision.execute')) {
          ctx.fillStyle = '#FFD700';
        } else {
          ctx.fillStyle = '#e94560';
        }
        
        ctx.fillText(line, 150, y);
      });
      
      ctx.restore();
    };

    const drawFloatingFragments = (timestamp) => {
      ctx.save();
      ctx.globalAlpha = 0.8;
      ctx.font = '14px "Courier New", monospace';
      
      const fragments = [
        { text: '{}', color: '#9370DB', baseX: 100, baseY: 80 },
        { text: '()', color: '#20B2AA', baseX: 200, baseY: 60 },
        { text: '=>', color: '#FFD700', baseX: 320, baseY: 70 },
        { text: 'const', color: '#9370DB', baseX: 450, baseY: 90 },
        { text: 'function', color: '#20B2AA', baseX: 580, baseY: 75 },
        { text: '[]', color: '#e94560', baseX: 680, baseY: 85 }
      ];
      
      fragments.forEach((fragment, index) => {
        ctx.fillStyle = fragment.color;
        
        // Gentle hovering motion with different speeds and amplitudes
        const floatSpeedX = 0.0008 + (index * 0.0003);
        const floatSpeedY = 0.0012 + (index * 0.0004);
        const amplitudeX = 15 + (index * 3);
        const amplitudeY = 10 + (index * 2);
        
        const x = fragment.baseX + Math.sin(timestamp * floatSpeedX + index) * amplitudeX;
        const y = fragment.baseY + Math.sin(timestamp * floatSpeedY + index * 1.5) * amplitudeY;
        
        // Add subtle pulsing effect
        const scale = 1 + Math.sin(timestamp * 0.003 + index) * 0.05;
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.fillText(fragment.text, -ctx.measureText(fragment.text).width / 2, 0);
        ctx.restore();
      });
      
      ctx.restore();
    };

    const drawStunningCodeTransform = (transformProgress) => {
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(transformProgress);
        particle.draw(ctx);
      });
      
      // Draw final code with enhanced styling
      if (transformProgress > 0.7) {
        ctx.save();
        ctx.globalAlpha = Math.min(1, (transformProgress - 0.7) * 3);
        drawFinalCode();
        ctx.restore();
      }
    };

    const animate = (timestamp) => {
      if (!animationRef.current) return;
      
      // Initialize start time
      if (!startTime) {
        startTime = timestamp;
        phaseStartTime = timestamp;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, 800, 400);
      
      // If animation is complete, just draw the final state
      if (animationComplete) {
        drawFinalCode();
        drawFloatingFragments(timestamp);
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate phase progress
      const phaseElapsed = timestamp - phaseStartTime;
      let progress = Math.min(phaseElapsed / PHASE_DURATIONS[phase], 1);
      
      switch (phase) {
        case 'line':
          drawLine(easeInOutCubic(progress));
          if (progress >= 1) {
            phase = 'eyeForm';
            phaseStartTime = timestamp;
          }
          break;
          
        case 'eyeForm':
          const formProgress = easeOutElastic(progress);
          drawProfessionalEye(formProgress);
          if (progress >= 1) {
            phase = 'eyeBlink';
            phaseStartTime = timestamp;
            blinkCount = 0;
          }
          break;
          
        case 'eyeBlink':
          let blinkProgress = 0;
          const blinkDuration = 250;
          const blinkInterval = 900;
          
          if (blinkCount < 2) {
            const blinkTime = phaseElapsed % blinkInterval;
            if (blinkTime < blinkDuration) {
              blinkProgress = Math.sin((blinkTime / blinkDuration) * Math.PI);
            }
            
            if (phaseElapsed > (blinkCount + 1) * blinkInterval - 100) {
              blinkCount++;
            }
          }
          
          drawProfessionalEye(1, blinkProgress);
          
          if (blinkCount >= 2 && phaseElapsed > PHASE_DURATIONS.eyeBlink) {
            phase = 'codeTransform';
            phaseStartTime = timestamp;
            initializeParticles();
          }
          break;
          
        case 'codeTransform':
          const eyeAlpha = Math.max(0, 1 - progress * 2);
          
          // Draw fading eye
          if (eyeAlpha > 0) {
            ctx.save();
            ctx.globalAlpha = eyeAlpha;
            drawProfessionalEye(1, 0);
            ctx.restore();
          }
          
          // Draw stunning code transformation
          drawStunningCodeTransform(easeInOutQuart(progress));
          
          if (progress >= 1) {
            // Animation complete - enter final state
            animationComplete = true;
          }
          break;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: '400px',
      background: 'transparent'
    }}>
      <canvas 
        ref={canvasRef}
        style={{
          maxWidth: '100%',
          height: 'auto',
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default ThreeJSAnimation;
