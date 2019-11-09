declare module 'react-firestore' {
  import React from 'react';
  export class FirestoreProvider extends React.Component<any> {}

  export interface IFirestoreCollectionProps {
    path: string;
    sort?: string;
    render(args: any): React.ReactNode;
  }
  export class FirestoreCollection extends React.Component<IFirestoreCollectionProps> {}
}
