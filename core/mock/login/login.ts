import {MockMethod} from 'vite-plugin-mock'

export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: ({query, body}) => {
            console.log(query)
            if (body.username == 'admin') {
                return {
                    code: 'A000',
                    data: 'p099-admin-token',
                    msg: '成功'
                }
            }
            return {
                code: 'A001',
                msg: '账号或密码错误'
            }
        },
    },

    {
        url: '/admin-leasy/api/login/current-user',
        method: 'get',
        response: ({query, body}) => {
            console.log(query, body)
            return {
                code: 'A000',
                data: {}
            }
        },
    },


] as MockMethod[]
