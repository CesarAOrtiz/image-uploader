const uploadImage = async (file: File) => {
  const data = new FormData();
  data.append("image", file);
  try {
    const request = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    const response = await request.json();
    if (request.status !== 200) throw new Error(response.error);
    return response;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default uploadImage;
