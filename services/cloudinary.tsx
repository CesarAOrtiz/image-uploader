import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "mycompnay",
  api_key: "936222152828577",
  api_secret: "ThgZLO1GT1FJz1QAmsLOI7shwHU",
});

export default cloudinary.v2;
