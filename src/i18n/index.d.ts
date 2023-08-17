type Translation = Record<string, string | Translation>;

export interface ILanguage {
  code: string;
  name: string;

  translations: Translation;
}

export {};
