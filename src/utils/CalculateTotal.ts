
export default function(amounts: string): number{
    const numbers = amounts
        .split(/[\n,]+/)
        .map(str=>str.trim())
        .filter(str=> str!== '')
        .map(Number)

    return numbers
        .filter(num=>!isNaN(num))
        .reduce((sum, num) =>sum + num, 0)  
    
}