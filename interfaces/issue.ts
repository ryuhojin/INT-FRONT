export interface responseIssueListInterface {
    list: [];
    pageable: {
        page: number;
        hasMore: boolean;
        totalPages: number;
        totalElements: number;
        query?: string;
    };
}