import { AxiosTool } from '../../utils/AxiosTool'

export default class AuthApi {

    static authLoginUserPath = "/auth/login/user"
    static authLoginDoctorPath = "/auth/login/doctor"
    static authRegisterUserPath = "/auth/register/user"
    static authRegisterDoctorPath = "/auth/register/doctor"

    static authLoginUser(phoneCountryCode, phoneNumber, password) {
        return AxiosTool().post(AuthApi.authLoginUserPath, { phoneCountryCode, phoneNumber, password })
    }

    static authLoginDoctor(phoneCountryCode, phoneNumber, password) {
        return AxiosTool().post(AuthApi.authLoginDoctorPath, { phoneCountryCode, phoneNumber, password })
    }

    static authRegisterUser(lastName, firstName, gender, age, phoneCountryCode,
        phoneNumber, ic, password, smsCode) {
        return AxiosTool().post(AuthApi.authRegisterUserPath, {
            lastName,
            firstName,
            gender,
            age,
            phoneCountryCode,
            phoneNumber,
            ic,
            password,
            smsCode
        })
    }

    static authRegisterDoctor(lastName, firstName, gender, age, phoneCountryCode,
        phoneNumber, ic, license, qualification, hospital, password, smsCode) {
        return AxiosTool().post(AuthApi.authRegisterDoctorPath, {
            lastName,
            firstName,
            gender,
            age,
            phoneCountryCode,
            phoneNumber,
            ic,
            license,
            qualification,
            hospital,
            password,
            smsCode
        })
    }

}
