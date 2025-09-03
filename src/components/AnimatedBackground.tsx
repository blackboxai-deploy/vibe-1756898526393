"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* CSS Styles for animations */}
      <style jsx global>{`
         @keyframes waveMove1 {
          0%, 100% { 
            transform: translateX(0%) translateY(0%);
          }
          25% { 
            transform: translateX(5%) translateY(-3%);
          }
          50% { 
            transform: translateX(-3%) translateY(5%);
          }
          75% { 
            transform: translateX(8%) translateY(-2%);
          }
        }
        
        @keyframes waveMove2 {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
          }
          33% { 
            transform: scale(1.15) rotate(2deg);
          }
          66% { 
            transform: scale(0.85) rotate(-2deg);
          }
        }
        
        @keyframes waveMove3 {
          0%, 100% { 
            background: linear-gradient(180deg, transparent 60%, rgba(0, 255, 65, 0.03) 80%, rgba(0, 255, 65, 0.06) 100%);
          }
          50% { 
            background: linear-gradient(180deg, transparent 70%, rgba(0, 255, 65, 0.05) 85%, rgba(0, 255, 65, 0.08) 100%);
          }
        }
        
        @keyframes digitalPulse {
          0%, 100% { 
            opacity: 0.02;
          }
          50% { 
            opacity: 0.04;
          }
        }
        
        .wave-layer-1 {
          animation: waveMove1 45s ease-in-out infinite;
        }
        
        .wave-layer-2 {
          animation: waveMove2 55s ease-in-out infinite reverse;
        }
        
        .wave-layer-3 {
          animation: waveMove3 30s ease-in-out infinite;
        }
        
        .digital-flow {
          animation: digitalPulse 25s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Gradient Waves Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Primary wave layer - Moving gradients */}
        <div 
          className="wave-layer-1 absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 100%, rgba(0, 255, 65, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 90%, rgba(0, 255, 65, 0.25) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Secondary wave layer - Scaling gradients */}
        <div 
          className="wave-layer-2 absolute inset-0 opacity-[0.08]"
          style={{
            background: `
              radial-gradient(ellipse 120% 60% at 30% 80%, rgba(0, 150, 30, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse 90% 40% at 70% 85%, rgba(0, 255, 65, 0.2) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Bottom flowing gradient */}
        <div 
          className="wave-layer-3 absolute inset-0 opacity-[0.12]"
          style={{
            background: 'linear-gradient(180deg, transparent 60%, rgba(0, 255, 65, 0.1) 80%, rgba(0, 255, 65, 0.2) 100%)'
          }}
        />
        
        {/* Digital flow texture */}
        <div 
          className="digital-flow absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(0, 255, 65, 0.06) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      {/* Ambient glow */}
      <div 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/[0.01] rounded-full blur-3xl pointer-events-none"
        style={{ filter: 'blur(150px)' }}
      />
    </>
  );
}