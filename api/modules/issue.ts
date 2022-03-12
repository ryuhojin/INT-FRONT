import service from "../index";

export async function selectIssue(id: number) {
  return await service.get(`issue/${id}`);
}
export async function selectIssueTemp() {
  return await service.get(`issue/temp`);
}
export async function createIssue(params: {
  title: string;
  content: string;
  docType: string;
  hashtags: [];
}) {
  return await service.post("issue", params);
}
export async function createTempIssue(params: {
  title: string;
  content: string;
  docType: string;
  hashtags: [];
}) {
  return await service.post("issue/temp", params);
}
export async function updateIssue(params: {
  id: number;
  title: string;
  content: string;
  docType: string;
  hashtags: [];
}) {
  return await service.put("issue", params);
}
export async function deleteIssue(id: number) {
  return await service.delete(`issue/${id}`);
}

export async function getIssues(params: { query?: string; page: number }) {
  const queryUrl = `&query=${params.query}`;
  const response = await service.get(
    `issue/list/latest?page=${params.page}&size=20${
      params.query ? queryUrl : ""
    }`
  );
  const data = response.data.content;
  const nextId =
    response.data.totalPages - 1 > response.data.number
      ? response.data.number + 1
      : null;
  return { data, nextId };
}

export async function getUserIssues(params: { page: number }) {
  const response = await service.get(
    `issue/list/myIssue?page=${params.page}&size=20`
  );
  const data = response.data.content;
  const nextId =
    response.data.totalPages - 1 > response.data.number
      ? response.data.number + 1
      : null;
  return { data, nextId };
}
