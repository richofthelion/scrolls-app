
//
// --- Elder Scroll Card API Response ---

export interface ElderScrollsCardAPIResponse {
  readonly cards: ReadonlyArray<ElderScrollCardInterface>;
  readonly _links: {
    readonly next: string;
    readonly prev: string;
  }
  readonly _pageSize: number;
  readonly _totalCount: number;
}

//
// --- Elder Scroll Card ---

export interface ElderScrollCardInterface {
  readonly name: string;
  readonly imageUrl: string;
  readonly set: ElderScrollCardSetInterface;
  readonly text: string;
  readonly type: string;
}

//
// --- Elder Scroll Card Set ---

export interface ElderScrollCardSetInterface {
  readonly id: string;
  readonly name: string;
  readonly _self: string;
}
