import axios from 'axios'
import { constant } from 'lodash';
import { history } from '../../App';



export const dangKy = (user) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: user
            })
            if (result.data) {
                history.push('/dangnhap')
            }
        } catch (error) {
            console.log(error.response?.data);
            alert(error.response?.data)
        }
    }
}

export const dangNhap = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            })
            dispatch({
                type: 'DANG_NHAP',
                tenDangNhap: result.data.taiKhoan
            })
            localStorage.setItem('user', JSON.stringify(result.data))
            localStorage.setItem('t', result.data.accessToken)

            alert('Đăng nhập thành công')
            history.push('/')
        } catch (err) {
            console.log(err.response?.data)
            alert(err.response?.data)
        }
    }
}
export const dangXuat = () => {
    return (dispatch) => {
        dispatch({
            type: 'DANG_XUAT',
            tenDangNhap: ''
        })
        localStorage.removeItem('user')
        localStorage.removeItem('t')
    }
}

export const datVe = (info, token) => {
    return async (dispatch) => {
        try {
            const result = await axios({

                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: info,
                headers: { 'Authorization': 'Bearer ' + token }
            })
            // dispatch({
            //     type: 'RESET_MANG_GHE',
            // })
        } catch (error) {
            console.log(error);
        }

    }
}

export const layThongTinTaiKhoan = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
                method: 'POST',
                data: taiKhoan
            })
            dispatch({
                type: 'SET_THONG_TIN_TAI_KHOAN',
                thongTinTaiKhoan: result.data
            })
        } catch (error) {
            console.log(error.response?.data);
        }

    }
}

export const doiMatKhau = (taiKhoan, matKhau, matKhauMoi) => {
    const token = localStorage.getItem('t')
    const layThongTinUser = async () => {
        const user = await axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03&tuKhoa=${taiKhoan}`,
            method: 'GET'
        })
        const doiMatKhau = async () => {
            try {
                const result = await axios({
                    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                    method: 'PUT',
                    headers: { 'Authorization': 'Bearer ' + token },
                    data: { ...user.data[0], matKhau: matKhauMoi, maNhom: 'GP03' }
                })
                alert('Đổi mật khẩu thành công');
            } catch (error) {
                console.log(error.response?.data);
            }
            
        } 
        if (user.data[0].matKhau === matKhau) {
            doiMatKhau()
        }else{
            alert('Sai mật khẩu!!!')
        }
    }
    layThongTinUser()
}

export const doiGiaoDien = (component) => {
    return (dispatch) => {
        dispatch({
            type: 'DOI_GIAO_DIEN',
            component: component
        })
    }
}


export const doiChucNang = (component) => {
    return (dispatch) => {
        dispatch({
            type: 'DOI_CHUC_NANG_DANG_HIEN_THI',
            componentChucNang: component
        })
    }
}

export const capNhatThongTinNguoiDung = (newInfo, token) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'PUT',
                data: newInfo,
                headers: { 'Authorization': 'Bearer ' + token }
            })
            console.log(result.data);
            alert('ok')
        } catch (error) {
            console.log(error);
        }

    }
}