export type Element = {
  id: string;
  title: string;
  completed: boolean;
};

// State type
export type State = {
  readonly elements: Element[];
  readonly title: string;
};
