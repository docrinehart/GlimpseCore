export interface IRequestsFilterState {
    method: object
    status: object
    contentTypeClass: number
}
export interface IRequestFilterDetails {
    indexedTotalCount: IRequestsFilterState
    filteredCount: number;
}