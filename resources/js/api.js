import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/products";

export async function fetchProducts(page = 1) {
    try {
        let response = await axios.get(`${API_BASE_URL}?page=${page}`);
        return response.data;
    } catch (error) {
        console.log("lỗi : ", error);
    }
}
export async function getProductDetail(id) {
    try {
        let response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy thông tin sản phẩm:", error);
        return null;
    }
}

export async function deleteProduct(id) {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
        return true;
    } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        return false;
    }
}

//api.js
export async function updateProduct(id, data) {
    try {
        let response = await axios.put(`${API_BASE_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(
            "Lỗi khi cập nhật sản phẩm:",
            error.response?.data || error.message
        );
        return null;
    }
}

// api.js
export async function createProduct(data) {
    try {
        if (!data.image) {
            data.image = "default.jpg"; // Thêm giá trị mặc định
        }
        let response = await axios.post(`${API_BASE_URL}`, data);
        return response.data;
    } catch (error) {
        console.error(
            "❌ Lỗi khi tạo sản phẩm:",
            error.response?.data || error.message
        );
        return null;
    }
}
