import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Limit how many gems can cluster near the mouse
const MAX_GEMS_NEAR_MOUSE = 8;
let activeGemCount = 0;

const randomPosition = () => {
  // Distribute gems more evenly across the screen
  // Create a slight tendency to position gems toward the edges
  const distributeWithEdgeBias = (size: number) => {
    const position = Math.random() * size;
    // Apply edge bias - slightly favors edges over center
    const edgeBias = Math.sin(Math.PI * Math.random()) * (size * 0.3);
    return Math.max(10, Math.min(size - 10, position + edgeBias));
  };

  return {
    x: distributeWithEdgeBias(window.innerWidth),
    y: distributeWithEdgeBias(window.innerHeight),
  };
};

const randomColor = () => {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-cyan-500",
    "text-emerald-500",
    "text-orange-500",
    "text-teal-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Calculate magnetic effect based on distance and cursor velocity
const calculateMagneticEffect = (
  mouseX: number,
  mouseY: number,
  gemX: number,
  gemY: number,
  cursorVelocity: number,
) => {
  const dx = mouseX - gemX;
  const dy = mouseY - gemY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Magnetic range decreases as cursor speed increases
  const magneticRange = Math.max(100, 250 - cursorVelocity * 2.5);

  // Calculate a min distance to avoid extreme clustering
  const minDistance = 30;

  // No effect if outside of magnetic range or too close
  if (distance > magneticRange || distance < minDistance) {
    // Apply slight repulsion if too close
    if (distance < minDistance) {
      const repelFactor = ((minDistance - distance) / minDistance) * 2;
      return {
        x: gemX - dx * repelFactor * 0.1,
        y: gemY - dy * repelFactor * 0.1,
        strength: -repelFactor,
      };
    }
    return { x: gemX, y: gemY, strength: 0 };
  }

  // Stronger effect when closer, weaker when cursor moves fast
  const velocityFactor = Math.max(0.15, 1 - cursorVelocity / 70);

  // Calculate strength with a more gradual falloff and weaker overall pull
  const magneticStrength = Math.max(
    0.3,
    (80 / (distance + 80)) * velocityFactor,
  );

  // Add slight randomness to prevent gems from clustering in the exact same position
  const jitter = (Math.random() - 0.5) * 1.5;

  return {
    x: gemX + dx * magneticStrength * 0.035 + jitter,
    y: gemY + dy * magneticStrength * 0.035 + jitter,
    strength: magneticStrength,
  };
};

export const FloatingGem: React.FC = () => {
  const [position, setPosition] = React.useState(randomPosition);
  const [nextPosition, setNextPosition] = React.useState(randomPosition);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [prevMousePosition, setPrevMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [cursorVelocity, setCursorVelocity] = React.useState(0);
  const [currentPosition, setCurrentPosition] = React.useState(randomPosition);
  const color = React.useMemo(() => randomColor(), []);

  // Keep track of this gem's active status
  const [isActive, setIsActive] = React.useState(false);

  // Determine if this gem follows the mouse or moves randomly
  // Use a unique ID for this gem to manage active counts
  const gemID = React.useRef(Math.floor(Math.random() * 1000000));
  const followsMouse = React.useMemo(() => {
    if (activeGemCount >= MAX_GEMS_NEAR_MOUSE) {
      return false;
    }
    const follows = Math.random() > 0.75;
    if (follows) {
      activeGemCount++;
    }
    return follows;
  }, []);

  // Generate a random offset for each gem to create swarming effect
  // With a wider distribution to prevent clustering
  const offset = React.useMemo(
    () => ({
      x: (Math.random() - 0.5) * 180,
      y: (Math.random() - 0.5) * 180,
      delay: Math.random() * 0.8,
      repelFactor: Math.random() * 0.5 + 0.5, // How strongly this gem repels others
    }),
    [],
  );

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPrevMousePosition(mousePosition);
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Calculate cursor velocity with damping for more stable behavior
      const dx = e.clientX - prevMousePosition.x;
      const dy = e.clientY - prevMousePosition.y;
      const instantVelocity = Math.sqrt(dx * dx + dy * dy);
      // Blend with previous velocity for smoother transitions
      setCursorVelocity((prev) => prev * 0.7 + instantVelocity * 0.3);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initial random position
    setTimeout(() => {
      const initialPos = randomPosition();
      setPosition(initialPos);
      setCurrentPosition(initialPos);
    }, Math.random() * 1000);

    // For gems that don't follow mouse, set up random movement
    if (!followsMouse) {
      const interval = setInterval(
        () => {
          // For free-moving gems, stay more spread out across the screen
          const newPos = randomPosition();
          // Ensure some minimum travel distance to avoid tiny movements
          const dx = newPos.x - nextPosition.x;
          const dy = newPos.y - nextPosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > window.innerWidth * 0.2) {
            setNextPosition(newPos);
          } else {
            // If too close, generate a more distant position
            setNextPosition({
              x: (nextPosition.x + window.innerWidth / 2) % window.innerWidth,
              y: (nextPosition.y + window.innerHeight / 2) % window.innerHeight,
            });
          }
        },
        Math.random() * 10000 + 8000, // Longer intervals for more gentle movement
      );

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(interval);
      };
    } else {
      // For gems that follow mouse, update position with magnetic effect
      const magneticEffect = setInterval(() => {
        setCurrentPosition((prevPos) => {
          const magnetic = calculateMagneticEffect(
            mousePosition.x,
            mousePosition.y,
            prevPos.x,
            prevPos.y,
            cursorVelocity,
          );

          // Update active status based on magnetic strength
          setIsActive(magnetic.strength > 0.4);

          // If too many gems are near mouse, reduce effect
          const distanceToMouse = Math.sqrt(
            Math.pow(prevPos.x - mousePosition.x, 2) +
              Math.pow(prevPos.y - mousePosition.y, 2),
          );

          if (distanceToMouse < 100 && activeGemCount > MAX_GEMS_NEAR_MOUSE) {
            // Apply a slight repelling force to prevent clustering
            const repelAngle = Math.atan2(
              prevPos.y - mousePosition.y,
              prevPos.x - mousePosition.x,
            );
            return {
              x: prevPos.x + Math.cos(repelAngle) * 2,
              y: prevPos.y + Math.sin(repelAngle) * 2,
            };
          }

          return { x: magnetic.x, y: magnetic.y };
        });

        // Gradually decrease velocity when no movement
        setCursorVelocity((prev) => Math.max(0, prev * 0.92));
      }, 16); // ~60fps update

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(magneticEffect);
      };
    }
  }, [
    followsMouse,
    mousePosition.x,
    mousePosition.y,
    prevMousePosition.x,
    prevMousePosition.y,
    cursorVelocity,
  ]);

  return (
    <motion.div
      className={`absolute ${color}`}
      initial={position}
      animate={{
        x: followsMouse ? currentPosition.x : nextPosition.x,
        y: followsMouse ? currentPosition.y : nextPosition.y,
        rotate: 360,
        scale: followsMouse ? [1, 1.1, 1] : 1,
      }}
      whileHover={{ scale: 1.2 }}
      transition={{
        x: {
          duration: followsMouse ? 0.8 : 12,
          ease: followsMouse ? "circOut" : "easeInOut",
          delay: followsMouse ? 0 : offset.delay,
        },
        y: {
          duration: followsMouse ? 0.8 : 12,
          ease: followsMouse ? "circOut" : "easeInOut",
          delay: followsMouse ? 0 : offset.delay,
        },
        scale: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        },
        rotate: { duration: 10, ease: "linear", repeat: Infinity },
      }}
    >
      <Icon
        icon="lucide:diamond"
        className={`w-6 h-6 ${followsMouse && isActive ? "animate-pulse" : ""} opacity-90`}
        style={{ filter: "drop-shadow(0 0 3px currentColor)" }}
      />
    </motion.div>
  );
};
