import service from '../index'

export async function getIssueList<responseIssueListInterface>(params: { page: number, query?: string }) {
    let url = `issue/list/latest?page=${params.page}&size=20`
    if (params.query) {
        url += `&query=${params.query}`
    }
    const { data } = await service.get(url);
    if (params.query) {
        return {
            list: data.content,
            pageable: {
                page: data.number,
                hasMore: !data.last,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                query: data.query,
            }
        }
    }
    return {
        list: data.content,
        pageable: {
            page: data.number,
            hasMore: !data.last,
            totalPages: data.totalPages,
            totalElements: data.totalElements
        }
    }
}
export async function selectIssue(id: number) {
    return await service.get(`issue/${id}`)
}
export async function createIssue(params: { title: string, content: string, docType: string, hashtags: [] }) {
    return await service.post('issue', params)
}
export async function updateIssue(params: { id: number, title: string, content: string, docType: string, hashtags: [] }) {
    return await service.put('issue', params)
}
export async function deleteIssue(id: number) {
    return await service.delete(`issue/${id}`)
}