import service from '../index'

export async function getSolutionList(id: number) {
    return await service.get(`solution/list/${id}`)
}
export async function setSolution(params: { issueId: number, content: string, docType: string }) {
    return await service.post('solution', params)
}
export async function updateSolution(params: { id: number, content: string, docType: string }) {
    return await service.put('solution', params)
}
export async function deleteSolution(id: number) {
    return await service.delete(`solution/${id}`)
}
export async function adobtSolution(id: number) {
    return await service.put(`solution/adobt/${id}`)
}
export async function recommendSolution(id: number) {
    return await service.put(`solution/recommend/${id}`)
}