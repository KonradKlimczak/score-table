declare module 'react-firestore' {
  import React from 'react';
  export class FirestoreProvider extends React.Component<any> {}

  export interface IRenderArgs<T> {
    isLoading: boolean;
    data: T;
  }

  export interface IFirestoreCollectionProps<T> {
    path: string;
    sort?: string;
    render(args: IRenderArgs<T>): React.ReactNode;
  }
  export class FirestoreCollection<T = any> extends React.Component<IFirestoreCollectionProps<T>> {}
}
