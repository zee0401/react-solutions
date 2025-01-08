const fetchItems = async (url) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};
