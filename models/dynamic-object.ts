export interface DynamicObject {
  [key: string]:
    | number
    | string
    | boolean
    | Date
    | Array<DynamicObject>
    | DynamicObject;
}
