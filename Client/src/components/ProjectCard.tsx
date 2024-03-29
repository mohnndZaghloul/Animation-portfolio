import { motion } from "framer-motion";
import SwiperModal from "./SwiperModal";
import { useState } from "react";

type image_TP = {
  fieldname: string;
  originalname: string;
  filename: string;
  path: string;
  size: number;
};
const ProjectCard = ({
  images,
  title,
}: {
  images?: image_TP[];
  title: string;
}) => {
  const [modal, setModal] = useState(false);
  const modalToggler = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <motion.div
        onClick={modalToggler}
        initial={{ scale: 0.9, opacity: 0 - 4 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        className="cursor-pointer group rounded-lg overflow-hidden aspect-[4/3]">
        <div className="relative">
          <img
            className="w-full h-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-300"
            src={`http://localhost:5050/${images?.[0].filename}`}
            alt="image"
          />
          <div className="absolute flex items-center px-4 transition duration-500 bottom-0 translate-y-full group-hover:translate-y-0 left-0 w-full h-1/4 bg-gradient-to-t from-black">
            <h3 className="capitalize text-xl">{title}</h3>
          </div>
        </div>
      </motion.div>
      <SwiperModal images={images!} modal={modal} modalToggler={modalToggler} />
    </>
  );
};

export default ProjectCard;
