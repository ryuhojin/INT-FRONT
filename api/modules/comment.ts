import service from '../index'

export async function selectComment(id: number) {
    return await service.get(`comment/list/${id}`)
}
export async function createComment(params: { solutionId: number, content: string }) {
    return await service.post("comment", params)
}
export async function updateComment(params: { id: number, content: string }) {
    return await service.put("comment", params)
}
export async function deleteComment(id: number) {
    return await service.delete(`comment/${id}`)
}