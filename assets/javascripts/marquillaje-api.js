
const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json";

export const fetchProductsByType = async (type) => {
  try {
    const response = await fetch(`${API_URL}?product_type=${type}`);
    if (!response.ok) throw new Error("Error al obtener productos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
