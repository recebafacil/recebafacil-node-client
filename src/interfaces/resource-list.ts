export interface ResourceList<T> {
  resource: 'list';
  items: T[];
  limit: number;
  offset: number;
  page: number;
  total: number;
  total_pages: number;
  has_more: boolean;
}
