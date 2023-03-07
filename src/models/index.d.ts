import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserdetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Userdetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email: string;
  readonly Username: string;
  readonly Password: string;
  readonly Lname?: string | null;
  readonly Fname?: string | null;
  readonly Dob?: string | null;
  readonly Country?: string | null;
  readonly Payment_status: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserdetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Userdetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email: string;
  readonly Username: string;
  readonly Password: string;
  readonly Lname?: string | null;
  readonly Fname?: string | null;
  readonly Dob?: string | null;
  readonly Country?: string | null;
  readonly Payment_status: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Userdetails = LazyLoading extends LazyLoadingDisabled ? EagerUserdetails : LazyUserdetails

export declare const Userdetails: (new (init: ModelInit<Userdetails>) => Userdetails) & {
  copyOf(source: Userdetails, mutator: (draft: MutableModel<Userdetails>) => MutableModel<Userdetails> | void): Userdetails;
}

type EagerSignin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Signin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email?: string | null;
  readonly Password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySignin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Signin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email?: string | null;
  readonly Password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Signin = LazyLoading extends LazyLoadingDisabled ? EagerSignin : LazySignin

export declare const Signin: (new (init: ModelInit<Signin>) => Signin) & {
  copyOf(source: Signin, mutator: (draft: MutableModel<Signin>) => MutableModel<Signin> | void): Signin;
}

type EagerSignup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Signup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly Email?: string | null;
  readonly Password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySignup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Signup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly Email?: string | null;
  readonly Password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Signup = LazyLoading extends LazyLoadingDisabled ? EagerSignup : LazySignup

export declare const Signup: (new (init: ModelInit<Signup>) => Signup) & {
  copyOf(source: Signup, mutator: (draft: MutableModel<Signup>) => MutableModel<Signup> | void): Signup;
}