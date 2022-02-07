import service from '../index'

export async function getCommentList(id: number) {
    return await service.get(`comment/list/${id}`)
}
export async function setComment(params: { id: number, solutionId: number, content: string | undefined }) {
    return await service.post("comment", params)
}
export async function updateComment(params: { id: number, solutionId: number, content: string | undefined }) {
    return await service.put("comment", params)
}
export async function deleteComment(id: number) {
    return await service.delete(`comment/${id}`)
}