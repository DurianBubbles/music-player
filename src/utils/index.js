export function formatDuration(i) {
    const trans = i / 1000
    const minute = (trans / 60).toFixed(0)
    const second = (trans % 60).toFixed(0)
    return formatNum(minute) + ':' + formatNum(second)
}

export function formatNum(i) {
    const t = '00' + i
    return t.slice(t.length - 2, t.length)
}

export function formatCurrentTime(i) {
    const minute = (i / 60).toFixed(0)
    const second = (i % 60).toFixed(0)
    return formatNum(minute) + ':' + formatNum(second)
}

export function formatNumber(number) {
    number = Number(number) || 0
    return number > 100000 ? `${Math.round(number / 10000)}万` : number
}

export function formatDate(value) {
    let date = new Date(value)
    let y = date.getFullYear()
    let MM = date.getMonth() + 1
    MM = MM < 10 ? "0" + MM : MM
    let d = date.getDate()
    d = d < 10 ? "0" + d : d
    let h = date.getHours()
    h = h < 10 ? "0" + h : h
    let m = date.getMinutes()
    m = m < 10 ? "0" + m : m
    let s = date.getSeconds()
    s = s < 10 ? "0" + s : s
    return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s
}