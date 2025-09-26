export function swapPair(from, to){
    if(!from || !to) throw new Error('Missing Currency')
    return [from, to]
}