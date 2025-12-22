export interface IDb_New_Record {
  data: object;
}
export interface IDb_Record extends IDb_New_Record {
  id: string;
}

export interface IDb_Read_Response {
  record: IDb_Record;
}
export interface IDb_Post_Response {
  id: string;
}
export type IDb_Put_Response = IDb_Post_Response;
export interface IDb_Query_Response {
  items: IDb_Record[];
}

export interface IDb {
  read: (args: { id: string }) => Promise<IDb_Read_Response>;
  post: (args: { record: IDb_New_Record }) => Promise<IDb_Post_Response>; // create
  put: (args: { record: IDb_Record }) => Promise<IDb_Put_Response>; // update
  query: (args: { type: string; where: object }) => Promise<IDb_Query_Response>;
}

export const createDb = (): IDb => {
  return {
    read: async () => { return { record: { id: '', data: {} }} },
    post: async () => { return { id: '' }},
    put: async () => { return { id: '' }},
    query: async () => { return { items: [] }},
  }
}