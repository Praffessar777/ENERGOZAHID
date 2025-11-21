import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { Button } from './ui/button';

interface InteractiveMapProps {
  className?: string;
}

export function InteractiveMap({ className = '' }: InteractiveMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Office coordinates (center of the map)
  const officeLocation = { x: 400, y: 300 };

  const drawMap = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save context for transforms
    ctx.save();

    // Apply zoom and pan transforms
    ctx.translate(position.x, position.y);
    ctx.scale(zoom, zoom);

    // Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f8fafc');
    gradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw streets (simplified Kiev street layout)
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3;
    
    // Main streets
    const streets = [
      // Horizontal streets
      { start: { x: 0, y: 250 }, end: { x: 800, y: 250 } }, // Хрещатик
      { start: { x: 0, y: 350 }, end: { x: 800, y: 350 } }, // Нижній Вал
      { start: { x: 0, y: 150 }, end: { x: 800, y: 150 } },
      { start: { x: 0, y: 450 }, end: { x: 800, y: 450 } },
      
      // Vertical streets
      { start: { x: 200, y: 0 }, end: { x: 200, y: 600 } },
      { start: { x: 400, y: 0 }, end: { x: 400, y: 600 } }, // Майдан
      { start: { x: 600, y: 0 }, end: { x: 600, y: 600 } },
    ];

    streets.forEach(street => {
      ctx.beginPath();
      ctx.moveTo(street.start.x, street.start.y);
      ctx.lineTo(street.end.x, street.end.y);
      ctx.stroke();
    });

    // Draw Dnieper River
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.quadraticCurveTo(200, 480, 400, 500);
    ctx.quadraticCurveTo(600, 520, 800, 500);
    ctx.stroke();

    // Draw parks and important areas
    ctx.fillStyle = '#22c55e';
    ctx.globalAlpha = 0.3;
    
    // Mariinskyi Park
    ctx.beginPath();
    ctx.arc(300, 400, 40, 0, Math.PI * 2);
    ctx.fill();
    
    // Independence Square
    ctx.fillRect(380, 230, 40, 40);
    
    ctx.globalAlpha = 1;

    // Draw buildings
    ctx.fillStyle = '#e2e8f0';
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    
    const buildings = [
      { x: 180, y: 330, w: 40, h: 40 },
      { x: 250, y: 330, w: 30, h: 50 },
      { x: 290, y: 330, w: 35, h: 45 },
      { x: 360, y: 330, w: 25, h: 40 },
      { x: 420, y: 330, w: 40, h: 50 },
      { x: 470, y: 330, w: 30, h: 35 },
    ];

    buildings.forEach(building => {
      ctx.fillRect(building.x, building.y, building.w, building.h);
      ctx.strokeRect(building.x, building.y, building.w, building.h);
    });

    // Highlight office building
    ctx.fillStyle = '#264A96';
    ctx.fillRect(390, 330, 30, 45);
    ctx.strokeStyle = '#F9C642';
    ctx.lineWidth = 2;
    ctx.strokeRect(390, 330, 30, 45);

    // Draw office marker with animation
    const markerSize = isHovering ? 25 : 20;
    const pulseSize = Math.sin(Date.now() / 500) * 3 + markerSize;
    
    // Marker shadow
    ctx.fillStyle = 'rgba(38, 74, 150, 0.2)';
    ctx.beginPath();
    ctx.arc(officeLocation.x, officeLocation.y + 5, pulseSize + 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Marker background pulse
    ctx.fillStyle = 'rgba(249, 198, 66, 0.3)';
    ctx.beginPath();
    ctx.arc(officeLocation.x, officeLocation.y, pulseSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Main marker
    ctx.fillStyle = '#264A96';
    ctx.beginPath();
    ctx.arc(officeLocation.x, officeLocation.y, markerSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Marker center
    ctx.fillStyle = '#F9C642';
    ctx.beginPath();
    ctx.arc(officeLocation.x, officeLocation.y, markerSize - 5, 0, Math.PI * 2);
    ctx.fill();

    // Street labels
    ctx.fillStyle = '#374151';
    ctx.font = '12px Manrope, sans-serif';
    ctx.textAlign = 'center';
    
    // Add street names
    ctx.fillText('вул. Нижній Вал', 400, 340);
    ctx.fillText('Майдан Незалежності', 400, 240);
    ctx.fillText('Дніпро', 400, 520);

    // Restore context
    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    drawMap();

    // Animation loop for pulsing marker
    const animate = () => {
      drawMap();
      requestAnimationFrame(animate);
    };
    animate();
  }, [zoom, position, isHovering]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom - position.x / zoom;
    const y = (e.clientY - rect.top) / zoom - position.y / zoom;
    
    // Check if mouse is near office location
    const distance = Math.sqrt(
      Math.pow(x - officeLocation.x, 2) + Math.pow(y - officeLocation.y, 2)
    );
    setIsHovering(distance < 30);

    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    const newZoom = Math.max(0.5, Math.min(3, zoom + (e.deltaY > 0 ? -zoomFactor : zoomFactor)));
    setZoom(newZoom);
  };

  const zoomIn = () => setZoom(prev => Math.min(3, prev + 0.2));
  const zoomOut = () => setZoom(prev => Math.max(0.5, prev - 0.2));
  const resetView = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const openInMaps = () => {
    const address = encodeURIComponent('Kyiv, Ukraine, Nyzhny Val Street, 7-9');
    window.open(`https://www.google.com/maps/search/${address}`, '_blank');
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-move"
          style={{ height: '400px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        />
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button
            size="sm"
            variant="outline"
            className="w-10 h-10 p-0 bg-white shadow-md"
            onClick={zoomIn}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-10 h-10 p-0 bg-white shadow-md"
            onClick={zoomOut}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-10 h-10 p-0 bg-white shadow-md"
            onClick={resetView}
          >
            <Maximize className="w-4 h-4" />
          </Button>
        </div>

        {/* Office Info Tooltip */}
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg border max-w-xs"
          >
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                   style={{ backgroundColor: 'var(--energy-blue)' }}>
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm" style={{ color: 'var(--energy-blue)' }}>
                  ЕНЕРГОЗАХІД
                </h4>
                <p className="text-xs text-gray-600">
                  вул. Нижній Вал, 7-9<br />
                  офіс 9, 3-й поверх
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Map Instructions */}
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded text-xs text-gray-600">
          🖱️ Перетягуйте для переміщення • 🔄 Прокрутка для масштабування
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4">
        <Button
          onClick={openInMaps}
          className="w-full energy-gradient text-white hover:opacity-90"
          size="lg"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Побудувати маршрут в Google Maps
        </Button>
      </div>
    </div>
  );
}