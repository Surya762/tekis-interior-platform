import { motion } from "framer-motion";

const ThreeDView = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          3D Visualization
        </motion.h2>

        <p className="text-muted-foreground mb-10">
          Experience our designs in immersive 3D walkthrough.
        </p>

        {/* 🎥 VIDEO */}
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <video
            src="/videos/video.mp4"  
            controls
            autoPlay
            loop
            muted
            className="w-full h-[400px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ThreeDView;