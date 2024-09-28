export function currencyFormatter(currency: string, value: number): string {
    const formatte = new Intl.NumberFormat('es-CL', {
        minimumFractionDigits: 0,
    })

    return formatte.format(value) ?? 0
}