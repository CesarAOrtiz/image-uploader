const uploadImage = async (file: File) => {
  const data = new FormData();
  data.append("image", file);
  try {
    const request = await fetch("/api/upload", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      body: data,
    });
    console.log(request);
    const response = await request.json();
    console.log(response);
    return response;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default uploadImage;
