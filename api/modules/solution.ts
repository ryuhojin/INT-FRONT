import service from '../index'

export async function selectSolution(id: number) {
    return await service.get(`solution/list/${id}`)
}
export async function createSolution(params: { issueId: number, content: string, docType: string }) {
    return await service.post('solution', params)
}
export async function updateSolution(params: { id: number, content: string, docType: string }) {
    return await service.put('solution', params)
}
export async function deleteSolution(id: number) {
    return await service.delete(`solution/${id}`)
}
export async function adobtSolution(id: number) {
    return await service.put(`solution/adopt/${id}`)
}
export async function recommendSolution(id: number) {
    return await service.put(`solution/recommend/${id}`)
}