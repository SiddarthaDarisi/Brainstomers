import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Class_link?: string | null;
  readonly Homework?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Class_link?: string | null;
  readonly Homework?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Content = LazyLoading extends LazyLoadingDisabled ? EagerContent : LazyContent

export declare const Content: (new (init: ModelInit<Content>) => Content) & {
  copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}

type EagerCandidate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Email: string;
  readonly Subject?: string | null;
  readonly Message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCandidate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Email: string;
  readonly Subject?: string | null;
  readonly Message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Candidate = LazyLoading extends LazyLoadingDisabled ? EagerCandidate : LazyCandidate

export declare const Candidate: (new (init: ModelInit<Candidate>) => Candidate) & {
  copyOf(source: Candidate, mutator: (draft: MutableModel<Candidate>) => MutableModel<Candidate> | void): Candidate;
}