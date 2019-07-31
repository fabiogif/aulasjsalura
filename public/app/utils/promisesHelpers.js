export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.status)

export const log = param => {
    console.log(param)
    return param;
}