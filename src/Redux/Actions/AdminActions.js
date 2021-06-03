import axios from 'axios'

export const layPhimPhanTrang = (trangHienTai, soPhanTu) => {
    return async (dispatch) => {
        const result = await axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTu}`,
            method: 'GET'
        })
        dispatch({
            type: 'SET_PHIM_PHAN_TRANG',
            phimPhanTrang: result.data
        })
    }
}

export const xoaPhim = (maPhim) => {
    return async () => {
        try {
            // ????
            console.log(123);
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method: 'DELETE',
                headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVkdGFsazEwMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE2MjI0NjMyNjQsImV4cCI6MTYyMjQ2Njg2NH0.b2sqspzPPc5YVDjc_v8A14i5Hl3v6yOjh2fu3b-LS-A'}
            })
            console.log(result.data);
        } catch (error) {
            alert(error.response.data);
        }
    }
}

export const doiGiaoDien = (component) => {
    return (dispatch) => {
        dispatch({
            type: 'DOI_GIAO_DIEN_ADMIN',
            component: component
        })
    }
}
  