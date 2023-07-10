const compactNumberFormatter = new Intl.NumberFormat('ko-KR', {
    notation: 'compact',
    maximumFractionDigits: 1,
});

export function compactNumber(number: number): string {
    return compactNumberFormatter.format(number);
}

export function numberWithCommas(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}