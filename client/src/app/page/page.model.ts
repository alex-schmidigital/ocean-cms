export interface Page {
  readonly id?: number | string;
  readonly title?: string;
  readonly content?: string;
  readonly image?: string;
  readonly owner?: number;
}
