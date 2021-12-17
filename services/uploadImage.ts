const uploadImage = async (file: File) => {
  const data = new FormData();
  data.append("image", file);
  try {
    const request = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    console.log(request);
    // if (request.status !== 200) throw new Error("Upload failed");
    const response = await request.json();
    console.log(response);
    return response;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default uploadImage;
