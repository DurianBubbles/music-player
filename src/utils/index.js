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