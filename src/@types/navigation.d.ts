export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      dashboard: undefined;
      form?: {
        uuid: string;
      };
      feedback: {
        isOnDiet: boolean;
      };
      preview: {
        uuid: string;
      },
    }
  }
}
