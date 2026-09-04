/**
 * Tipos usados para dar autocomplete/segurança de tipos nas respostas
 * da Content Management API do Contentful.
 */

export interface ContentfulSys {
  id: string;
  version: number;
  publishedVersion?: number;
}

export interface ContentfulEntry<TFields = Record<string, unknown>> {
  sys: ContentfulSys;
  fields: TFields;
}

export interface ContentfulEntriesResponse<TFields = Record<string, unknown>> {
  items: ContentfulEntry<TFields>[];
}

/** Campo localizado, ex: { 'en-US': 'valor' } */
export type LocalizedField<T = string> = Record<string, T>;

/** Referência a outra entry (usada em campos de link, ex: produto -> categoria) */
export interface EntryLink {
  sys: {
    type: 'Link';
    linkType: 'Entry';
    id: string;
  };
}

export function toEntryLink(entryId: string): EntryLink {
  return { sys: { type: 'Link', linkType: 'Entry', id: entryId } };
}

// ---- Campos por content type ----

export interface CategoryFields {
  name: LocalizedField;
  slug: LocalizedField;
}

export interface ProductFields {
  name: LocalizedField;
  slug: LocalizedField;
  description: LocalizedField;
  price: LocalizedField<number>;
  available: LocalizedField<boolean>;
  ingredients: LocalizedField<string[]>;
  category?: LocalizedField<EntryLink>;
}

export interface UserFields {
  name: LocalizedField;
  email: LocalizedField;
  phone: LocalizedField;
  address: LocalizedField;
}

export interface OrderFields {
  customerName: LocalizedField;
  totalPrice: LocalizedField<number>;
  status: LocalizedField;
  orderType: LocalizedField;
  items?: LocalizedField<EntryLink>;
  user?: LocalizedField<EntryLink>;
}
