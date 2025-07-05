import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@heroui/react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { FloatingGem } from "../components/FloatingGem";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      <Card className="w-full h-full bg-gradient-to-br from-orange-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-200 mb-4">Oops! Page not found</p>
            <Button>
              <a href="/" className="text-white hover:text-blue-700 underline">
                Return to Home
              </a>
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 flex top-[25%] justify-center"
        >
          <Icon
            icon="lucide:hexagon"
            className="text-portfolio-orange w-32 h-32 animate-pulse"
          />
        </motion.div>

        {[...Array(40)].map((_, index) => (
          <FloatingGem key={index} />
        ))}
      </Card>
    </div>
  );
};

export default NotFound;
