import { Routes, Route, Link } from "react-router-dom";

import Home from '../screens/home';
import ImageSegmentation from "../screens/image_segmetion";
import VideoSegmentation from "../screens/video_segmetion";

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image-segmentation" element={<ImageSegmentation />} />
      <Route path="/video-segmentation" element={<VideoSegmentation />} />
    </Routes>
  );

}

export default RootRoutes;
